module.exports = {
  name: "forage",
  async execute({ user, db }) {
    const gain = Math.floor(Math.random()*180)+20;
    user.balance += gain;
    db.save();
    return "🔎 forage: You found " + gain + " coins.";
  }
};