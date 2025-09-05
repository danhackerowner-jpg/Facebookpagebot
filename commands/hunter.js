module.exports = {
  name: "hunter",
  async execute({ user, db }) {
    const pay = Math.floor(Math.random()*200)+100;
    user.balance += pay;
    db.save();
    return "💼 hunter: You earned " + pay + " coins.";
  }
};