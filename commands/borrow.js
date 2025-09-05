module.exports = {
  name: "borrow",
  execute({ args, user, db, utils }) {
    const amt = utils.parseAmount(args[1], 2000);
    if (amt<=0) return "Usage: borrow <amount>";
    user.bank -= Math.floor(amt*0.1); // small bank penalty
    user.balance += amt;
    db.save();
    return `💳 Borrowed ${utils.fmtCoins(amt)} (10% bank fee).`;
  }
};