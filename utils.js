function parseAmount(arg, max) {
  if (!arg) return 0;
  arg = String(arg).toLowerCase();
  if (arg === "all" && typeof max === "number") return max;
  let n = parseInt(arg.replace(/[^0-9]/g, ""), 10);
  return isNaN(n) ? 0 : n;
}

function fmtCoins(n) {
  return new Intl.NumberFormat().format(n);
}

function msToHuman(ms) {
  const s = Math.ceil(ms/1000);
  const h = Math.floor(s/3600);
  const m = Math.floor((s%3600)/60);
  const sec = s%60;
  if (h) return `${h}h ${m}m ${sec}s`;
  if (m) return `${m}m ${sec}s`;
  return `${sec}s`;
}

module.exports = { parseAmount, fmtCoins, msToHuman };