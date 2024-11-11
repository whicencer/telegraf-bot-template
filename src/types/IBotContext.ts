import { Context, Scenes } from "telegraf";
import { SceneSessionData } from "telegraf/scenes";

export interface CustomSessionData extends SceneSessionData {
  [key: string]: any;
}

export interface IBotContext extends Context {
  session: Scenes.SceneSession<CustomSessionData>;
  scene: Scenes.SceneContextScene<IBotContext>;
}