module.exports = {
  name: "withdraw",
  aliases: ["with"],
  execute({ args, user, db, utils }) {
    const amt = utils.parseAmount(args[1], user.bank);
    if (amt <= 0) return "Usage: withdraw <amount|all>";
    if (user.bank < amt) return "❌ Not enough bank funds.";
    user.bank -= amt;
    user.balance += amt;
    db.save();
    return `💸 Withdrew ${utils.fmtCoins(amt)}.`;
  }
};