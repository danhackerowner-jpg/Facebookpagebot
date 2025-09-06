const { GoogleGenerativeAI } = require("@google/generative-ai");

module.exports = {
  name: "gemini",
  aliases: ["ai", "chat"],
  description: "Ask Gemini Flash 2.0 a question",
  async execute(ctx) {
    const query = ctx.args.slice(1).join(" ");
    if (!query) {
      return "💡 Usage: gemini <your question>";
    }

    try {
      // 🔑 Your Gemini API key goes here
      const genAI = new GoogleGenerativeAI("AIzaSyCJjXFHw8UNo-gN5tRGhwH5M6avqAdne0E");
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      const result = await model.generateContent(query);
      const reply = result.response.text();

      const trimmed = reply.length > 1800 ? reply.slice(0, 1800) + "..." : reply;

      // Fancy styled reply
      return (
        "🤖 *GEMINI*\n" +
        "________________________\n" +
        trimmed + "\n" +
        "________________________\n" +
        "- Daniel edition"
      );
    } catch (e) {
      console.error("Gemini error:", e.response?.data || e.message);
      return "⚠️ Error connecting to Gemini API.";
    }
  }
};
        
