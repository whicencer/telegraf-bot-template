import { SceneNames } from "@src/enums/SceneNames";
import { Scene } from "./scene";

export const me = new Scene(SceneNames.ME);

me.enter(async (ctx) => {
  ctx.reply(
    `<b>Your ID:</b> <code>${ctx.from?.id}</code>\n<b>Your username:</b> <code>${ctx.from?.username}</code>`,
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Remove and leave scene", callback_data: "remove" }]
        ]
      },
      parse_mode: "HTML"
    }
  );
});

me.action("remove", async (ctx) => {
  await ctx.deleteMessage();
  await ctx.scene.leave();
});