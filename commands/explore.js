module.exports = {
  name: "explore",
  async execute({ user, db }) {
    const gain = Math.floor(Math.random()*180)+20;
    user.balance += gain;
    db.save();
    return "🔎 explore: You found " + gain + " coins.";
  }
};