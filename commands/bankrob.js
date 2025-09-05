module.exports = {
  name: "bankrob",
  execute({ user, db, utils }) {
    const chance = Math.random();
    if (chance < 0.2) {
      const gain = Math.floor(Math.random()*1000)+500;
      user.balance += gain;
      db.save();
      return `💥 Bank robbery success! +${utils.fmtCoins(gain)}`;
    } else {
      const fine = Math.min(user.balance, Math.floor(Math.random()*400)+200);
      user.balance -= fine;
      db.save();
      return `🚨 Bank robbery failed. Fine: -${utils.fmtCoins(fine)}`;
    }
  }
};