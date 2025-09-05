module.exports = {
  name: "help",
  aliases: ["commands"],
  execute({}) {
    return `📖 Commands (type without prefix):
balance | bank | daily | work | mine | deposit <amt> | withdraw <amt>
pay <userId> <amt> | rob <userId> | leaderboard
shop | buy <item> | sell <item> | inventory | use <item>
gamble <amt> | slots <amt> | coinflip <amt> | lottery <amt>
dice <amt> | blackjack <amt> | roulette <amt> | highlow <amt>
crash <amt> | wheel <amt> | keno <amt> | plinko <amt>
profile | stats | uptime | cooldowns | ping
job | setjob <name> | farmer | miner | coder | chef | police
thiefjob | hunter | driver | doctor | teacher
fish | hunt | chop | farm | forage | quarry | goldmine | diamondmine
explore | dungeon | duel <userId> <amt> | race <userId> <amt> | heist <userId>
adventure | quest | trivia | guess <n> | bet <amt>
borrow <amt> | repay <amt> | bankrob | insurance | tax | gift <userId> <amt>
donate <userId> <amt> | setname <name>`;
  }
};