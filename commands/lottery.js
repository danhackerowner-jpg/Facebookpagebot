module.exports = {
  name: "lottery",
  async execute({ args, user, db, utils }) {
    const bet = utils.parseAmount(args[1], user.balance);
    if (bet <= 0) return "Usage: lottery <amount>";
    if (user.balance < bet) return "❌ Not enough balance.";
    user.stats.gambled++;
    // Simple odds
    const win = Math.random() < 0.48;
    if (win) { user.balance += bet; user.stats.won++; db.save(); return "🎟️ You won +" + utils.fmtCoins(bet) + "!"; }
    else { user.balance -= bet; user.stats.lost++; db.save(); return "🎟️ You lost -" + utils.fmtCoins(bet) + "."; }
  }
};