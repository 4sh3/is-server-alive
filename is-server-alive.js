process.env["NTBA_FIX_319"] = 1
const ping = require('ping')
const TelegramBot = require('node-telegram-bot-api');
const chalk = require('chalk')

module.exports = {
    isServerAlive: function isServerAlive(config) {
        const chatId = config.chatId
        const token = config.token
        const bot = new TelegramBot(token, {
            polling: true
        });

        const targets = config.targets
        const options = config.options
        const intervalTimeout = config.intervalTimeout

        async function isAlive() {
            try {
                targets.forEach(function (host) {
                    ping.promise.probe(host, options).then(function (res) {
                        if (res.alive != true) sendMessagePromise(host, res)
                    });
                    // ping.sys.probe(host, function (isAlive) {
                    //     if (isAlive != true) sendMessage(host, isAlive)
                    // }, options);
                    // Add here your code to check if your service is alive, may be using fetch-node or something similar.
                })
            } catch (err) {
                handleFatalError(err)
            }
        }

        setInterval(isAlive, intervalTimeout)

        function sendMessagePromise(host, isAlive) {
            try {
                console.log("The Host: [" + host + "] with IP [" + res.numeric_host + "] is NOT Alive. " + new Date())
                bot.sendMessage(chatId, "The Host: [" + host + "] with IP [" + res.numeric_host + "] is NOT Alive. " + new Date())
            } catch (err) {
                handleFatalError(err)
            }
        }

        function sendMessage(host, isAlive) {
            try {
                console.log("The Host: [" + host + "] is NOT Alive. " + new Date())
                bot.sendMessage(chatId, "The Host: [" + host + "] is NOT Alive. " + new Date())
            } catch (err) {
                handleFatalError(err)
            }
        }

        function handleFatalError(err) {
            console.error(`${chalk.red('[fatal error]')} ${err.message}`)
            console.error(err.stack)
        }
    },

    showMyChatId: function showMyChatId(config) {
        const token = config
        const bot = new TelegramBot(token, {
            polling: true
        })

        bot.on('message', (msg) => {
            const chatId = msg.chat.id
            console.log('Your ChatID is: ' + chatId)
            bot.sendMessage(chatId, 'Your ChatID is: ' + chatId)
        })
    }
}