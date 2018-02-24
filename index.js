process.env["NTBA_FIX_319"] = 1
const ping = require('ping')
const TelegramBot = require('node-telegram-bot-api');

const chatId = 'INTRODUCE_YOUR_CHAT_ID'; 
const token = 'INTRODUCE_YOUR_BOT_TOKEN_HERE';  
const bot = new TelegramBot(token, {
    polling: true
});

const targets = ['google.com', '176.103.56.98']
const options = {
    timeout: 5, 
    extra: ["-i 2"], 
};
const intervalTimeout = 60000; 

async function isAlive() {
    try {
        targets.forEach(function (host) {
            ping.promise.probe(host, options).then(function (res) {
                if (res.alive == false) sendMessage(res)
            });
        })
    } catch (err) {
        handleFatalError(err)
    }
}

setInterval(isAlive, intervalTimeout)

function sendMessage(res) {
    try {
        bot.sendMessage(chatId, "The Host: [" + res.host + "] with IP [" + res.numeric_host + "] is NOT Alive.")
    } catch (err) {
        handleFatalError(err)
    }
}

function handleFatalError(err) {
    console.error(`${chalk.red('[fatal error]')} ${err.message}`)
    console.error(err.stack)
}