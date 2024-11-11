# Telegraf-Bot-Template

**🤖 Build your own Telegram bots with this template**

| TypeScript | Node.js | Telegraf.js | Complexity |
|------------|---------| ----------- | ---------- |
|     ✅     |   ✅    |     ✅      |     🚫     |


## How to start
**Step 1. Clone this repo into the folder for your project**

    git clone git@github.com:whicencer/telegraf-bot-template.git your_folder_name
**Step 2. Go to the project folder and remove the `.git` directory to unlink from git**
```
cd your_folder_name
rm -rf .git
```
**Step 3. Initialize your own git repository if needed**
```
git init
git add .
git commit -m "init"
```
**Step 4. Create `.env` file and specify the Telegram bot token**
```
TELEGRAM_BOT_TOKEN=your_token
```
**Step 5. Install all dependencies and run the code**
```
npm install
npm start
```
These instructions will guide you through setting up a new project using the specified template, including initializing a new git repository and starting the application.
## Project structure

```
your_folder_name
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
