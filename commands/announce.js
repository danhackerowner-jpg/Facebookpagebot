module.exports = {
  name: "announce",
  description: "Broadcast a message to all users who talked to the bot",
  async execute(ctx) {
    const OWNER_ID = "25040806992176288"; // replace with your PSID
    if (ctx.psid !== OWNER_ID) return "❌ You can’t use this command.";

    if (ctx.args.length < 2) return "⚠️ Usage: announce <message>";

    const msg = ctx.args.slice(1).join(" ");
    const sent = await ctx.broadcast(`Daniel✓:${msg}`);
    return `✅ Announcement sent to ${sent} users.`;
  }
};
