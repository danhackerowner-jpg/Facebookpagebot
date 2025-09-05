module.exports = {
  name: "inventory",
  aliases: ["inv"],
  execute({ user }) {
    const inv = user.inventory;
    const keys = Object.keys(inv);
    if (!keys.length) return "🎒 Inventory is empty.";
    let out = "🎒 Inventory:\n";
    keys.forEach(k => out += `- ${k}: ${inv[k]}\n`);
    return out.trim();
  }
};