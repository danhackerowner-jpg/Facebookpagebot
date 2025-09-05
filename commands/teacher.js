module.exports = {
  name: "teacher",
  async execute({ user, db }) {
    const pay = Math.floor(Math.random()*200)+100;
    user.balance += pay;
    db.save();
    return "💼 teacher: You earned " + pay + " coins.";
  }
};