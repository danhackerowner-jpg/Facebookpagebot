module.exports = {
  name: "toprich",
  execute({ db, utils }) {
    const arr = Object.values(db.data.users).sort((a,b)=> (b.balance+b.bank)-(a.balance+a.bank)).slice(0,5);
    return "💎 Richest:\n" + arr.map((u,i)=> `${i+1}. ${u.id} — ${utils.fmtCoins(u.balance+u.bank)}`).join("\n");
  }
};