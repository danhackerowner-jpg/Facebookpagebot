module.exports = {
  name: "guess",
  execute({ args, user, db }) {
    const n = parseInt(args[1],10);
    if (!(n>=1 && n<=10)) return "Usage: guess <1-10>";
    const ans = Math.floor(Math.random()*10)+1;
    if (n===ans) { user.balance += 200; db.save(); return `🎯 Correct! +200 coins.`; }
    else { user.balance -= 50; if (user.balance<0) user.balance=0; db.save(); return `❌ Wrong (${ans}). -50 coins.`; }
  }
};