module.exports = {
  name: "leaderboard",
  aliases: ["lb"],
  execute({ db, utils }) {
    const arr = Object.values(db.data.users)
      .sort((a,b)=> (b.balance+b.bank)-(a.balance+a.bank))
      .slice(0, 10);
    let out = "🏆 Leaderboard (Top 10 by Net Worth)\n";
    arr.forEach((u,i)=> out += `\n${i+1}. ${u.id} — ${utils.fmtCoins(u.balance+u.bank)}`);
    return out;
  }
};