module.exports = {
  name: "duel",
  execute({ args, db, user, utils }) {
    const target = args[1], amt = utils.parseAmount(args[2], user.balance);
    if (!target || amt<=0) return "Usage: duel <userId> <amount>";
    if (user.balance < amt) return "❌ Not enough balance.";
    const other = db.getUser(target);
    if (other.balance < amt) return "Target cannot cover the duel amount.";
    const uWins = Math.random() < 0.5;
    if (uWins) { user.balance += amt; other.balance -= amt; db.save(); return `⚔️ You won the duel! +${utils.fmtCoins(amt)}`; }
    else { user.balance -= amt; other.balance += amt; db.save(); return `⚔️ You lost the duel. -${utils.fmtCoins(amt)}`; }
  }
};