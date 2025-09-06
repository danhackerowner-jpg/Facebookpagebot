const fs = require("fs");
const path = require("path");

const DB_PATH = process.env.DB_PATH || path.join(__dirname, "data.json");

function readJSONSafe(p) {
  try {
    if (!fs.existsSync(p)) return {};
    const raw = fs.readFileSync(p, "utf8");
    if (!raw.trim()) return {};
    return JSON.parse(raw);
  } catch (e) {
    console.error("DB read error:", e);
    return {};
  }
}

function writeJSONSafe(p, data) {
  try {
    const tmp = p + ".tmp";
    fs.writeFileSync(tmp, JSON.stringify(data, null, 2));
    fs.renameSync(tmp, p);
  } catch (e) {
    console.error("DB write error:", e);
  }
}

class Database {
  constructor() {
    this.path = DB_PATH;
    this.data = readJSONSafe(this.path);
    if (!this.data.users) this.data.users = {};
    if (!this.data.cooldowns) this.data.cooldowns = {};
  }

  save() {
    writeJSONSafe(this.path, this.data);
  }

  getUser(id) {
    if (!this.data.users[id]) {
      this.data.users[id] = {
        id,
        name: "Player",
        balance: 500,
        bank: 0,
        inventory: {},
        job: null,
        stats: { worked: 0, mined: 0, gambled: 0, won: 0, lost: 0 }
      };
      this.save();
    }
    return this.data.users[id];
  }

  setCooldown(id, key, ms) {
    const until = Date.now() + ms;
    if (!this.data.cooldowns[id]) this.data.cooldowns[id] = {};
    this.data.cooldowns[id][key] = until;
    this.save();
    return until;
  }

  getCooldown(id, key) {
    const u = (this.data.cooldowns[id] || {})[key] || 0;
    const left = u - Date.now();
    return left > 0 ? left : 0;
  }

  // ✅ NEW METHOD
  getAllUserIds() {
    return Object.keys(this.data.users || {});
  }

  // (Optional) get all user objects
  getAllUsers() {
    return Object.values(this.data.users || {});
  }
}

module.exports = new Database();
  
