module.exports = {
  name: "bank",
  execute({ user, utils }) {
    return `🏦 Bank: ${utils.fmtCoins(user.bank)} | Available: ${utils.fmtCoins(user.balance)}`;
  }
};