module.exports = {
  name: "hunt",
  async execute({ user, db }) {
    const gain = Math.floor(Math.random()*180)+20;
    user.balance += gain;
    db.save();
    return "🔎 hunt: You found " + gain + " coins.";
  }
};