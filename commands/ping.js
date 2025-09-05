module.exports = {
  name: "ping",
  description: "Check bot latency",
  async execute() {
    const start = Date.now();
    await new Promise(resolve => setTimeout(resolve, 10));
    const latency = Date.now() - start;
    return `🏓 Pong! Latency: ${latency}ms`;
  }
};