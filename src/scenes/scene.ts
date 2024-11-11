import { BaseScene } from "telegraf/scenes";
import { IBotContext } from "@src/types/IBotContext";

export class Scene extends BaseScene<IBotContext> {
  constructor(sceneName: string) {
    super(sceneName);
  }
}