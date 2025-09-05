module.exports = {
  name: "bet",
  execute({ args, user, db, utils }) {
    const amt = utils.parseAmount(args[1], user.balance);
    if (amt<=0) return "Usage: bet <amount>";
    if (user.balance < amt) return "❌ Not enough balance.";
    const win = Math.random()<0.5;
    if (win) { user.balance += amt; db.save(); return `✅ Bet won: +${amt}`; }
    else { user.balance -= amt; db.save(); return `❌ Bet lost: -${amt}`; }
  }
};