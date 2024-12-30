# 💧 Drink Water Reminder Discord Bot

A simple Discord bot that sends periodic reminders to drink water and stay hydrated. Perfect for keeping your community healthy and refreshed!

## 🚀 Features
- Sends a reminder message every 30 minutes.
- Includes a motivational GIF to encourage hydration.
- Easy to set up and run.

## 📂 Project Structure
```
📁 drink-your-water-discord-bot
├── bot.js          # Main bot logic
├── images          # Folder containing GIFs (e.g., 1.gif)
├── node_modules    # Dependencies folder
├── .gitignore      # Git ignore file
├── package.json    # Project metadata and dependencies
├── package-lock.json # Dependency lock file
├── README.md       # Project documentation
└── run_bot.bat     # Batch script to run the bot
```

## ⚙️ Prerequisites
- Node.js (v16 or higher recommended)
- Discord account
- A Discord server where the bot can operate

## 📦 Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/danishayman/drink-your-water-discord-bot.git
   ```
2. Navigate to the project directory:
   ```bash
   cd drink-your-water-discord-bot
   ```
3. Install dependencies:
   ```bash
   npm install discord.js
   ```

## 🔑 Setup
1. Create a bot on the [Discord Developer Portal](https://discord.com/developers/applications).
2. Copy the bot token.
3. Open `bot.js` and paste the token:
   ```javascript
   const token = 'YOUR_BOT_TOKEN';
   ```
4. Update the channel ID in `bot.js` with your desired channel:
   ```javascript
   const channel = client.channels.cache.get('YOUR_CHANNEL_ID');
   ```
5. Place your GIFs in the `images` folder.

## ▶️ Running the Bot
- Run using Node.js:
   ```bash
   node bot.js
   ```
- Or use the batch script:
   ```bash
   run_bot.bat
   ```

### 🛠️ Configuring `run_bot.bat`
Open `run_bot.bat` and ensure the paths are correct:
```bat
@echo off
cd C:\path\to\your\project\drink-your-water-discord-bot
node bot.js
```
Replace `C:\path\to\your\project\drink-your-water-discord-bot` with the full path to your project directory.

Save the file and run it.

## 🛠️ Customization
- **Reminder Interval:** Update the `setInterval` value in `bot.js` to change the reminder frequency.
- **Message Content:** Modify the `content` field in `sendReminder()`.

## 🐞 Troubleshooting
- **Channel Not Found:** Ensure the bot has permission to view and send messages in the specified channel.
- **Token Issues:** Verify your token is correct and active.

## 🤝 Contributing
Feel free to fork this repository and submit pull requests!

## ❤️ Support
If you encounter any issues, open an issue on this repository.

Stay hydrated! 💦

