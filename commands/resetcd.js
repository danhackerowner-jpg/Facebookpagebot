module.exports = {
  name: "resetcd",
  execute({ psid, db }) {
    delete db.data.cooldowns[psid];
    db.save();
    return "✅ Your cooldowns were reset.";
  }
};