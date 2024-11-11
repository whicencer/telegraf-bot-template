import "dotenv/config";
import "module-alias/register";

import { Scenes, session, Telegraf } from "telegraf";
import { Command } from "./commands/command";
import { StartCommand } from "./commands/start";
import { IBotContext } from "./types/IBotContext";
import { me } from "./scenes/me";

class Bot {
  bot: Telegraf<IBotContext>;
  commands: Command[] = [];

  constructor() {
    const stage = new Scenes.Stage<IBotContext>([me]);

    this.bot = new Telegraf<IBotContext>(process.env.TELEGRAM_BOT_TOKEN || "");
    this.bot.use(session());
    this.bot.use(stage.middleware());
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