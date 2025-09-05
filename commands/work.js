module.exports = {
  name: "work",
  async execute({ psid, db, user, utils, random }) {
    const left = db.getCooldown(psid, "work");
    if (left) return `⏳ Work again in ${utils.msToHuman(left)}.`;
    const earn = random(50, 250);
    user.balance += earn;
    user.stats.worked++;
    db.setCooldown(psid, "work", 60*1000);
    db.save();
    return `💼 You worked and earned ${utils.fmtCoins(earn)}.`;
  }
};