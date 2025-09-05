module.exports = {
  name: "pay",
  execute({ args, db, user, utils }) {
    const target = args[1];
    const amt = utils.parseAmount(args[2], user.balance);
    if (!target || amt<=0) return "Usage: pay <userId> <amount>";
    if (user.balance < amt) return "❌ Not enough balance.";
    const other = db.getUser(target);
    user.balance -= amt;
    other.balance += amt;
    db.save();
    return `✅ Sent ${utils.fmtCoins(amt)} to ${target}.`;
  }
};