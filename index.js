const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const db = require("./db");
const { parseAmount, fmtCoins, msToHuman } = require("./utils");

const app = express();
app.use(bodyParser.json());

const VERIFY_TOKEN = process.env.VERIFY_TOKEN || "verify_token_here";
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN || "page_token_here";
const API_BASE = process.env.FB_API_BASE || "https://graph.facebook.com/v20.0";

// ---- messaging helper ----
async function sendMessage(sender_psid, message) {
  try {
    await axios.post(
      `${API_BASE}/me/messages`,
      { recipient: { id: sender_psid }, message },
      { params: { access_token: PAGE_ACCESS_TOKEN } }
    );
  } catch (e) {
    console.error("Send message error:", (e.response && e.response.data) || e.message);
  }
}

// ---- webhook verify ----
app.get("/webhook", (req, res) => {
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode && token) {
    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      console.log("Webhook verified");
      res.status(200).send(challenge);
    } else res.sendStatus(403);
  } else res.sendStatus(400);
});

// ---- command loader ----
const commands = new Map();
function loadCommands() {
  commands.clear();
  const dir = path.join(__dirname, "commands");
  fs.readdirSync(dir).forEach(file => {
    if (!file.endsWith(".js")) return;
    const mod = require(path.join(dir, file));
    if (!mod || !mod.name || typeof mod.execute !== "function") return;
    commands.set(mod.name, mod);
    if (Array.isArray(mod.aliases)) mod.aliases.forEach(a => commands.set(a, mod));
  });
  console.log(`Loaded ${commands.size} command keys`);
}
loadCommands();

// ---- main webhook ----
app.post("/webhook", async (req, res) => {
  const body = req.body;
  if (body.object !== "page") return res.sendStatus(404);

  for (const entry of body.entry) {
    const event = (entry.messaging && entry.messaging[0]) || null;
    if (!event) continue;
    const psid = event.sender && event.sender.id;
    if (!psid) continue;

    if (event.message && event.message.text) {
      const text = (event.message.text || "").trim();
      await handleText(psid, text);
    }
  }
  res.status(200).send("EVENT_RECEIVED");
});

async function handleText(psid, text) {
  const user = db.getUser(psid);
  const args = text.split(/\s+/);
  const name = args[0].toLowerCase();
  const cmd = commands.get(name);
  const ctx = {
    psid,
    user,
    db,
    args,
    say: (t) => sendMessage(psid, { text: t }),
    utils: { parseAmount, fmtCoins, msToHuman },
    random: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
  };

  if (cmd) {
    try {
      const out = await cmd.execute(ctx);
      if (typeof out === "string" && out) await sendMessage(psid, { text: out });
    } catch (e) {
      console.error("Command error:", e);
      await sendMessage(psid, { text: "⚠️ Error running command." });
    }
  } else {
    await sendMessage(psid, { text: 'Unknown command. Type "help" for commands.' });
  }
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Bot running on port " + PORT));