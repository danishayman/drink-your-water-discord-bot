const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ]
});

// Bot token from the Discord Developer Portal
const token = 'YOUR_BOT_TOKEN';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    // Set interval to remind every 45 minutes
    setInterval(sendReminder, 30 * 60 * 1000); // 45 minutes * 60 seconds * 1000 milliseconds
});

async function sendReminder() {
    const channel = client.channels.cache.get('your-channel-id'); // Channel ID
    if (channel) {
        try {
            // Send reminder message with GIF link and line break
            await channel.send({
                content: 'It\'s time to drink water! 💧\nRemember to stay hydrated 🥤!',
                files: ['images/1.gif']
            });
        } catch (error) {
            console.error('Error sending reminder message:', error);
        }
    } else {
        console.error('Channel not found!');
    }
}

client.login(token);
