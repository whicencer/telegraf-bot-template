import { Telegraf } from "telegraf";
import { Command } from "./command";
import { IBotContext } from "types/IBotContext";
import { SceneNames } from "enums/SceneNames";

export class StartCommand extends Command {
  constructor(bot: Telegraf<IBotContext>) {
    super(bot);
  }

  handle() {
    this.bot.start(async (ctx) => {
      await ctx.reply(
        "Hello! This is a <b>telegraf-bot-template</b>.\n<b>Created by @whicencer</b>",
        {
          reply_markup: {
            inline_keyboard: [
              [{ text: "Get me", callback_data: "get_me" }]
            ]
          },
          parse_mode: "HTML"
        }
      );
    });

    this.bot.action("get_me", async (ctx) => {
      await ctx.scene.enter(SceneNames.ME);
    })
  }
}