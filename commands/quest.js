module.exports = {
  name: "quest",
  async execute({ user, db }) {
    const swing = Math.floor(Math.random()*200) - 50; // may be negative
    user.balance += swing;
    db.save();
    return "Quest: " + (swing>=0? ("You gained "+swing):("You lost "+(-swing))) + " coins.";
  }
};