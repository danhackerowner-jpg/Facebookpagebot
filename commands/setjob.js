module.exports = {
  name: "setjob",
  execute({ args, user, db }) {
    const name = (args[1]||"").toLowerCase();
    if (!name) return "Usage: setjob <name>";
    user.job = name;
    db.save();
    return `✅ Job set to ${name}. Use 'work' to earn more.`;
  }
};