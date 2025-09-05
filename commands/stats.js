module.exports = {
  name: "stats",
  execute({ user }) {
    const s = user.stats;
    return `📊 Stats — Worked: ${s.worked}, Mined: ${s.mined}, Gambled: ${s.gambled}, Won: ${s.won}, Lost: ${s.lost}`;
  }
};