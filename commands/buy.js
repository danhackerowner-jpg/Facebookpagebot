const PRICES = { pickaxe:500, rod:400, sword:800, shield:700, laptop:1200, car:5000 };
module.exports = {
  name: "buy",
  execute({ args, user, db }) {
    const item = (args[1]||"").toLowerCase();
    if (!PRICES[item]) return "Item not found. Try: shop";
    const cost = PRICES[item];
    if (user.balance < cost) return "❌ Not enough balance.";
    user.balance -= cost;
    user.inventory[item] = (user.inventory[item]||0) + 1;
    db.save();
    return `🛒 Bought ${item} for ${cost}.`;
  }
};