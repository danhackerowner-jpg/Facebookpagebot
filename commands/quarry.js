module.exports = {
  name: "quarry",
  async execute({ user, db }) {
    const gain = Math.floor(Math.random()*180)+20;
    user.balance += gain;
    db.save();
    return "🔎 quarry: You found " + gain + " coins.";
  }
};