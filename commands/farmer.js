module.exports = {
  name: "farmer",
  async execute({ user, db }) {
    const pay = Math.floor(Math.random()*200)+100;
    user.balance += pay;
    db.save();
    return "💼 farmer: You earned " + pay + " coins.";
  }
};