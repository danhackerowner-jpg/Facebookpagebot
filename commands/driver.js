module.exports = {
  name: "driver",
  async execute({ user, db }) {
    const pay = Math.floor(Math.random()*200)+100;
    user.balance += pay;
    db.save();
    return "💼 driver: You earned " + pay + " coins.";
  }
};