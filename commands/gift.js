module.exports = {
  name: "gift",
  execute({ args, db, user, utils }) {
    const target = args[1], amt = utils.parseAmount(args[2], user.balance);
    if (!target || amt<=0) return "Usage: gift <userId> <amount>";
    if (user.balance < amt) return "Not enough balance.";
    const other = db.getUser(target);
    user.balance -= amt;
    other.bank += amt; // gift goes to bank
    db.save();
    return `🎁 Gifted ${utils.fmtCoins(amt)} to ${target} (bank).`;
  }
};