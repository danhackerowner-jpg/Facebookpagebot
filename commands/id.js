module.exports = {
  name: "id",
  description: "Show your user ID",
  execute(sender) {
    // If sender is an object (Messenger event), pick the ID
    const userId = typeof sender === "object" ? sender.id || sender.sender || JSON.stringify(sender) : sender;
    return `🆔 Your ID: ${userId}`;
  }
};
