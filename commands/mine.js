module.exports = {
  name: "mine",
  async execute({ psid, db, user, utils, random }) {
    const left = db.getCooldown(psid, "mine");
    if (left) return `⏳ Mine again in ${utils.msToHuman(left)}.`;
    const mined = random(0, 180);
    user.balance += mined;
    user.stats.mined++;
    db.setCooldown(psid, "mine", 45*1000);
    db.save();
    return `⛏️ You mined ${utils.fmtCoins(mined)} coins.`;
  }
};