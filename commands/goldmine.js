module.exports = {
  name: "goldmine",
  async execute({ user, db }) {
    const gain = Math.floor(Math.random()*180)+20;
    user.balance += gain;
    db.save();
    return "🔎 goldmine: You found " + gain + " coins.";
  }
};