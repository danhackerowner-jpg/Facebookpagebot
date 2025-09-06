const fs = require("fs");
const path = require("path");

module.exports = {
  name: "help",
  description: "List all available commands",
  async execute(ctx) {
    const dir = path.join(__dirname);
    const names = [];

    // Scan the commands folder
    fs.readdirSync(dir).forEach(file => {
      if (file.endsWith(".js")) {
        try {
          const mod = require(path.join(dir, file));
          if (mod && mod.name) names.push(mod.name);
        } catch (e) {
          console.error("Failed loading", file, e.message);
        }
      }
    });

    const unique = [...new Set(names)].sort();
    const list = unique.join(", ");

    // Create a border-style box
    const top = "╔══════════════════════════════════════╗";
    const bottom = "╚══════════════════════════════════════╝";
    const middle = `║ COMMANDS: ${list} ║`;

    return [top, middle, bottom].join("\n");
  }
};
    
