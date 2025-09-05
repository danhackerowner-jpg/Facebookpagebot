module.exports = {
  name: "miner",
  async execute({ user, db }) {
    const pay = Math.floor(Math.random()*200)+100;
    user.balance += pay;
    db.save();
    return "💼 miner: You earned " + pay + " coins.";
  }
};