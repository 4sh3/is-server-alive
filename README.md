# isAlive
This packages identify if a server is alive and can check if a service is running on this server doing a request that you have to configure easily, for example with fetch-node module, just follow the instructions.

> Welcome to my repository, you can help me validating my aptitudes on LinkedIn.

Author: Jordi Piqueras.
LinkedIn: https://www.linkedin.com/in/jordi-piqueras-50b439b9/

## Pre-requisites
First of all you need to install node.js and npm to run this code. You can do it on a Linux, MacOs, Windows even in your mobile phone like me.

## How to Install
npm install isAlive

## Before use it
Before use it you need to create a Telegram bot, follow the instructions.

1. On your Telegram App clic the pencil to create a new message.
2. On your Telegram App clic the magnifying glass to search a user and write: @botfather
3. Go to the chat and use commands with the slash symbol / to execute it
4. Create a new bot: /newbot 
5. Store the token and put it on the code showMyChatId.js and index.js.
6. Install the code with npm install.
7. Execute the file showMyChatId.js and while is executing then write something to the bot, this will show you a message with your id, put it on the code.
```js
# Go to the folder with the shell
node showMyChatId.js
```

## API How To Use It

Example: 
```js
process.env["NTBA_FIX_319"] = 1
const ping = require('ping')
const TelegramBot = require('node-telegram-bot-api');

/* 
    To see your chat id you have to create your bot, 
    then execute the testChatId.js file, 
    then write something to your bot chat from your telegram, 
    then your chatId will appear on the shell.
    
    If you catch some error please contact me via LinkedIn, I will try to help you ;)
*/
const chatId = 'INTRODUCE_YOUR_CHAT_ID'; // <------- 
const token = 'INTRODUCE_YOUR_BOT_TOKEN_HERE'; // <------- 
const bot = new TelegramBot(token, {
    polling: true
});

// Array of strings: Domains and URLs
const targets = ['google.com', '176.103.56.98']

// Time to wait for the ping response. Recommended: 5.
// Number of ping petitions. Recommended 2.
const options = {
    timeout: 5, 
    extra: ["-i 2"], 
};

// Interval of the request against the server. Recommended 60 Seconds, don't be banned, remember that some firewalls block this type of ICMP request.
const intervalTimeout = 60000; 

async function isAlive() {
    try {
        targets.forEach(function (host) {
            ping.promise.probe(host, options).then(function (res) {
                if (res.alive == false) sendMessage(res)
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
        bot.sendMessage(chatId, "The Host: [" + res.host + "] with IP [" + res.numeric_host + "] is NOT Alive.")
    } catch (err) {
        handleFatalError(err)
    }
}

function handleFatalError(err) {
    console.error(`${chalk.red('[fatal error]')} ${err.message}`)
    console.error(err.stack)
}
```
