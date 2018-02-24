process.env["NTBA_FIX_319"] = 1
const TelegramBot = require('node-telegram-bot-api')
const token = 'INTRODUCE_YOUR_BOT_TOKEN_HERE' // <------------ 
const bot = new TelegramBot(token, {
    polling: true
});
bot.on('message', (msg) => {
    const chatId = msg.chat.id
    console.log('Your ChatID is: ' + chatId)
    bot.sendMessage(chatId, 'Your ChatID is: ' + chatId)
});