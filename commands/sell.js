const PRICES = { pickaxe:500, rod:400, sword:800, shield:700, laptop:1200, car:5000 };
module.exports = {
  name: "sell",
  execute({ args, user, db }) {
    const item = (args[1]||"").toLowerCase();
    if (!user.inventory[item]) return "You don't have that item.";
    const value = Math.floor((PRICES[item]||100) * 0.6);
    user.inventory[item] -= 1;
    if (user.inventory[item] <= 0) delete user.inventory[item];
    user.balance += value;
    db.save();
    return `💱 Sold ${item} for ${value}.`;
  }
};