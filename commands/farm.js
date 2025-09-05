module.exports = {
  name: "farm",
  async execute({ user, db }) {
    const gain = Math.floor(Math.random()*180)+20;
    user.balance += gain;
    db.save();
    return "🔎 farm: You found " + gain + " coins.";
  }
};