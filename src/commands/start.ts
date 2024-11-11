import { Telegraf } from "telegraf";
import { Command } from "./command";
import { IBotContext } from "@src/types/IBotContext";

export class StartCommand extends Command {
  constructor(bot: Telegraf<IBotContext>) {
    super(bot);
  }

  handle() {
    this.bot.start(async (ctx) => {
      await ctx.reply("Hello! This is a <b>telegraf-bot-template</b>.\n<b>Created by @whicencer</b>", { parse_mode: "HTML" });
    });
  }
}