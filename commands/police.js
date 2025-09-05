module.exports = {
  name: "police",
  async execute({ user, db }) {
    const pay = Math.floor(Math.random()*200)+100;
    user.balance += pay;
    db.save();
    return "💼 police: You earned " + pay + " coins.";
  }
};