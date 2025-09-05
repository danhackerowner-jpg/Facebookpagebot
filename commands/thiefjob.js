module.exports = {
  name: "thiefjob",
  async execute({ user, db }) {
    const pay = Math.floor(Math.random()*200)+100;
    user.balance += pay;
    db.save();
    return "💼 thiefjob: You earned " + pay + " coins.";
  }
};