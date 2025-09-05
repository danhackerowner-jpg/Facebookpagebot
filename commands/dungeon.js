module.exports = {
  name: "dungeon",
  async execute({ user, db }) {
    const gain = Math.floor(Math.random()*180)+20;
    user.balance += gain;
    db.save();
    return "🔎 dungeon: You found " + gain + " coins.";
  }
};