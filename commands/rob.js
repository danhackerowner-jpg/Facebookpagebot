module.exports = {
  name: "rob",
  async execute({ args, db, user, utils, random }) {
    const target = args[1];
    if (!target) return "Usage: rob <userId>";
    const other = db.getUser(target);
    if (other.balance < 50) return "Target is too poor to rob.";
    const chance = Math.random();
    if (chance < 0.4) {
      const stolen = Math.min(other.balance, random(20, 150));
      other.balance -= stolen;
      user.balance += stolen;
      db.save();
      return `🕵️ You robbed ${utils.fmtCoins(stolen)} from ${target}!`;
    } else {
      const fine = Math.min(user.balance, random(10, 120));
      user.balance -= fine;
      db.save();
      return `🚓 You were caught! Fine: -${utils.fmtCoins(fine)}.`;
    }
  }
};