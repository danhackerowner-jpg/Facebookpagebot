module.exports = {
  name: "cooldowns",
  execute({ psid, db, utils }) {
    const keys = Object.keys((db.data.cooldowns[psid]||{}));
    if (!keys.length) return "No active cooldowns.";
    let out = "⏳ Cooldowns:\n";
    keys.forEach(k => {
      const left = db.getCooldown(psid, k);
      if (left) out += `- ${k}: ${utils.msToHuman(left)}\n`;
    });
    return out.trim();
  }
};