# Telegraf-Bot-Template

**🤖 Build your own Telegram bots with this template**

| TypeScript | Node.js | Telegraf.js | Webpack  | Complexity |
|------------|---------| ----------- | -------- | ---------- |
|     ✅     |   ✅    |     ✅      |    ✅    |    🚫     |


## How to start
**Step 1. Clone this repository**
```bash
git clone https://github.com/whicencer/telegraf-bot-template.git telegraf-bot
```
**Step 2. Go to the project folder and remove the `.git` directory to unlink from git**
```bash
cd telegraf-bot
rm -rf .git
```
**Step 3. Create `.env` file and specify the Telegram bot token**
```
TELEGRAM_BOT_TOKEN=your_token
```
**Step 4. Install all dependencies**
```bash
npm install
```
**Step 5. (only for development)**
```bash
npm run dev
```
**Step 6. If you want to run the bot in production**
```bash
npm run build
npm start
```

These instructions will guide you through setting up a new project using the specified template, including initializing a new git repository and starting the application in development and production modes respectively.
## Project structure

```
telegraf-bot
├── node_modules
├── src
|   ├── commands			 /* All commands handlers */
|   |	├── start.ts
|   |	└── command.ts
|   ├── enums                            /* Enums */
|   |	└── SceneNames.ts
|   ├── scenes				 /* All scenes */
|   |	├── scene.ts
|   |	└── me.ts
|   ├── types				 /* General types */
|   |	└── IBotContext.ts
|   └── app.ts
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json

```
