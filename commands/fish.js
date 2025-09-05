module.exports = {
  name: "fish",
  async execute({ user, db }) {
    const gain = Math.floor(Math.random()*180)+20;
    user.balance += gain;
    db.save();
    return "🔎 fish: You found " + gain + " coins.";
  }
};