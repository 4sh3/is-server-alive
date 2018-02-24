process.env["NTBA_FIX_319"] = 1
const ping = require('ping')
const TelegramBot = require('node-telegram-bot-api');

const chatId = 533740808; 
const token = '526576060:AAHKsPcsBUJBC4-jk0Rp5UGGYNA-kLSfKck';
const bot = new TelegramBot(token, {
    polling: true
});

const targets = ['nexurymarkets.com', 'nexurygroup.com']

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
                sendMessage(res)
            });
            // Here you can ADD more methods like GET/POST request to test your service using fetch-node
        })
    } catch (err) {
        handleFatalError(err)
    }
}

setInterval(isAlive, intervalTimeout)

function sendMessage(res) {
    try {
        // console.log(res)
        bot.sendMessage(chatId, "The Host: [" + res.host + "] with IP [" + res.numeric_host + "] is NOT Alive.")
    } catch (err) {
        handleFatalError(err)
    }
}

function handleFatalError(err) {
    console.error(`${chalk.red('[fatal error]')} ${err.message}`)
    console.error(err.stack)
}