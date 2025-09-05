const started = Date.now();
module.exports = {
  name: "uptime",
  execute() {
    const ms = Date.now()-started;
    const s = Math.floor(ms/1000);
    const h = Math.floor(s/3600), m=Math.floor((s%3600)/60), sec=s%60;
    return `⏱️ Uptime: ${h}h ${m}m ${sec}s`;
  }
};