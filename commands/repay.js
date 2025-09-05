module.exports = {
  name: "repay",
  execute({ args, user, db, utils }) {
    const amt = utils.parseAmount(args[1], user.balance);
    if (amt<=0) return "Usage: repay <amount>";
    if (user.balance < amt) return "Not enough balance.";
    user.balance -= amt;
    user.bank += Math.floor(amt*0.9);
    db.save();
    return `💵 Repaid ${utils.fmtCoins(amt)} (credited to bank minus fee).`;
  }
};