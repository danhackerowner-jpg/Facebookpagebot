module.exports = {
  name: "insurance",
  execute({ user, db }) {
    user.bank += 50;
    db.save();
    return "🛡️ Insurance payout: +50 to bank.";
  }
};