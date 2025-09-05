module.exports = {
  name: "profile",
  execute({ user, utils }) {
    return `🧑 Profile: ${user.name}
Balance: ${utils.fmtCoins(user.balance)} | Bank: ${utils.fmtCoins(user.bank)}
Job: ${user.job||"None"}`;
  }
};