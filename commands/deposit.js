module.exports = {
  name: "deposit",
  aliases: ["dep"],
  execute({ args, user, db, utils }) {
    const amt = utils.parseAmount(args[1], user.balance);
    if (amt <= 0) return "Usage: deposit <amount|all>";
    if (user.balance < amt) return "❌ Not enough balance.";
    user.balance -= amt;
    user.bank += amt;
    db.save();
    return `🏦 Deposited ${utils.fmtCoins(amt)}.`;
  }
};