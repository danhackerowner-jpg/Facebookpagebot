module.exports = {
  name: "chop",
  async execute({ user, db }) {
    const gain = Math.floor(Math.random()*180)+20;
    user.balance += gain;
    db.save();
    return "🔎 chop: You found " + gain + " coins.";
  }
};