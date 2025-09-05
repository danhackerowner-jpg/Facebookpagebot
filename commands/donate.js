module.exports = {
  name: "donate",
  execute({ args, db, user, utils }) {
    const target = args[1], amt = utils.parseAmount(args[2], user.balance);
    if (!target || amt<=0) return "Usage: donate <userId> <amount>";
    if (user.balance < amt) return "Not enough balance.";
    const other = db.getUser(target);
    user.balance -= amt;
    other.balance += amt;
    db.save();
    return `🎗️ Donated ${utils.fmtCoins(amt)} to ${target}.`;
  }
};