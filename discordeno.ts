import { startBot } from "https://deno.land/x/discordeno/mod.ts";

startBot({
  token: "BOT TOKEN",
  intents: ["GUILDS", "GUILD_MESSAGES"],
  eventHandlers: {
    ready() {
      console.log("Successfully connected to gateway");
    },
    messageCreate(message) {
      if (message.content === "!ping") {
        message.reply("Pong using Discordeno!");
      }
    },
  },
});
