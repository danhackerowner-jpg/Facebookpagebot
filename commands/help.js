const fs = require("fs");
const path = require("path");

module.exports = {
  name: "help",
  description: "List all available commands",
  execute() {
    const commandsDir = path.join(__dirname);
    const files = fs.readdirSync(commandsDir).filter(f => f.endsWith(".js"));

    let response = "📜 Available Commands:\n\n";

    for (const file of files) {
      try {
        const command = require(path.join(commandsDir, file));
        if (command.name && command.description) {
          response += `➡️ ${command.name} — ${command.description}\n`;
        }
      } catch (e) {
        console.error(`Error loading command ${file}:`, e);
      }
    }

    return response.trim();
  }
};
        
