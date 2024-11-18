import { IBotContext } from "types/IBotContext";
import { Telegraf } from "telegraf";

export abstract class Command {
  constructor(public bot: Telegraf<IBotContext>) {}

  abstract handle(): void;
}