module.exports = {
  name: "setname",
  execute({ args, user, db }) {
    const name = args.slice(1).join(" ").trim();
    if (!name) return "Usage: setname <name>";
    user.name = name.slice(0, 24);
    db.save();
    return `✅ Name set to ${user.name}`;
  }
};