module.exports = {
  name: "heist",
  execute({ args, db, user, utils }) {
    const target = args[1];
    if (!target) return "Usage: heist <userId>";
    const other = db.getUser(target);
    const chance = Math.random();
    if (chance < 0.3) {
      const haul = Math.min(other.bank, Math.floor(Math.random()*300)+100);
      other.bank -= haul;
      user.balance += haul;
      db.save();
      return `💣 Heist success! Stole ${utils.fmtCoins(haul)} from bank.`;
    } else {
      const fine = Math.min(user.balance, Math.floor(Math.random()*150)+50);
      user.balance -= fine;
      db.save();
      return `🛑 Heist failed. Fined ${utils.fmtCoins(fine)}.`;
    }
  }
};