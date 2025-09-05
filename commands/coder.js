module.exports = {
  name: "coder",
  async execute({ user, db }) {
    const pay = Math.floor(Math.random()*200)+100;
    user.balance += pay;
    db.save();
    return "💼 coder: You earned " + pay + " coins.";
  }
};