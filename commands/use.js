module.exports = {
  name: "use",
  execute({ args, user, db }) {
    const item = (args[1]||"").toLowerCase();
    if (!item) return "Usage: use <item>";
    if (!user.inventory[item]) return "You don't have that item.";
    // Simple effects
    if (item === "laptop") user.balance += 150;
    if (item === "pickaxe") user.balance += 75;
    if (item === "rod") user.balance += 60;
    if (item === "car") user.balance += 200;
    user.inventory[item] -= 1;
    if (user.inventory[item] <= 0) delete user.inventory[item];
    db.save();
    return `✨ Used ${item}. You gained some coins!`;
  }
};