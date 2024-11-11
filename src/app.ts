import "dotenv/config";

import { Telegraf } from "telegraf";
import { Command } from "./commands/command";
import { StartCommand } from "./commands/start";
import { IBotContext } from "./types/IBotContext";

class Bot {
  bot: Telegraf<IBotContext>;
  commands: Command[] = [];

  constructor() {
    this.bot = new Telegraf<IBotContext>(process.env.TELEGRAM_BOT_TOKEN || "");
  }

  private setupCommands() {
    this.commands = [
      new StartCommand(this.bot)
    ];

    for (const command of this.commands) {
      command.handle();
    }
  }

  async init() {
    try {
      this.setupCommands();
      await this.bot.launch(() => console.log("Bot is running..."));
    } catch (error) {
      console.error("Error launching the bot:", error);
    }
  }
}

const bot = new Bot();
bot.init();