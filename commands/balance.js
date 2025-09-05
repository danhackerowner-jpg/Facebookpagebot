module.exports = {
  name: "balance",
  aliases: ["bal"],
  execute({ user, utils }) {
    return `💰 Balance: ${utils.fmtCoins(user.balance)} | 🏦 Bank: ${utils.fmtCoins(user.bank)}`;
  }
};