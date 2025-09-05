const ITEMS = {
  pickaxe: 500,
  rod: 400,
  sword: 800,
  shield: 700,
  laptop: 1200,
  car: 5000
};
module.exports = {
  name: "shop",
  execute() {
    let out = "🛒 Shop:\n";
    Object.entries(ITEMS).forEach(([k,v])=> out += `- ${k}: ${v}\n`);
    return out.trim();
  }
};