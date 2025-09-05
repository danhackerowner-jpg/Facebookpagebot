module.exports = {
  name: "tax",
  execute({ user, db, utils }) {
    const tax = Math.floor((user.balance + user.bank) * 0.02);
    user.balance = Math.max(0, user.balance - Math.floor(tax/2));
    user.bank = Math.max(0, user.bank - Math.ceil(tax/2));
    db.save();
    return `💸 Paid tax: ${utils.fmtCoins(tax)} total.`;
  }
};