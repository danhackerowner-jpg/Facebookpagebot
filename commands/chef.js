module.exports = {
  name: "chef",
  async execute({ user, db }) {
    const pay = Math.floor(Math.random()*200)+100;
    user.balance += pay;
    db.save();
    return "💼 chef: You earned " + pay + " coins.";
  }
};