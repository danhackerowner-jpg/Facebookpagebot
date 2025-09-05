module.exports = {
  name: "daily",
  async execute({ psid, db, user, utils }) {
    const left = db.getCooldown(psid, "daily");
    if (left) return `⏳ Daily available in ${utils.msToHuman(left)}.`;
    const amt = 500;
    user.balance += amt;
    db.setCooldown(psid, "daily", 24*60*60*1000);
    db.save();
    return `✅ Daily claimed: +${utils.fmtCoins(amt)}!`;
  }
};