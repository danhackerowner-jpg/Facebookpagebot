module.exports = {
  name: "id",
  description: "Show your user ID",
  execute(sender, users) {
    return `🆔 Your ID: ${sender}`;
  }
};