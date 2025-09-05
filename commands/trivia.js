module.exports = {
  name: "trivia",
  async execute({ user, db }) {
    const swing = Math.floor(Math.random()*200) - 50; // may be negative
    user.balance += swing;
    db.save();
    return "Trivia: " + (swing>=0? ("You gained "+swing):("You lost "+(-swing))) + " coins.";
  }
};