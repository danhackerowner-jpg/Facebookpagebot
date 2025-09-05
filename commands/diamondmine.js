module.exports = {
  name: "diamondmine",
  async execute({ user, db }) {
    const gain = Math.floor(Math.random()*180)+20;
    user.balance += gain;
    db.save();
    return "🔎 diamondmine: You found " + gain + " coins.";
  }
};