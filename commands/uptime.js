function formatTime(seconds) {
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return `${d}d ${h}h ${m}m ${s}s`;
}

module.exports = {
  name: "uptime",
  description: "Show how long the bot has been running",
  execute() {
    const uptime = process.uptime();
    return `⏱️ Bot Uptime: ${formatTime(uptime)}`;
  }
};