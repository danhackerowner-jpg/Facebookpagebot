module.exports = {
  name: "doctor",
  async execute({ user, db }) {
    const pay = Math.floor(Math.random()*200)+100;
    user.balance += pay;
    db.save();
    return "💼 doctor: You earned " + pay + " coins.";
  }
};