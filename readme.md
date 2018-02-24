# is-server-alive
This packages identify if a server is alive and can check if a service is running on this server doing a request that you have to configure easily, for example with fetch-node module, just follow the instructions.

![alt text](https://image.prntscr.com/image/3HIyQBc-TLey8zHgsLBq6Q.png)

## Author: Jordi Piqueras.
> Welcome to my repository, you can help me validating my aptitudes on LinkedIn.

LinkedIn: https://www.linkedin.com/in/jordi-piqueras-50b439b9/

## Pre-requisites
First of all you need to install node.js and npm to run this code. You can do it on a Linux, MacOs, Windows even in your mobile phone like me.

## How to Install
npm install is-server-alive

## Before use it
Before use it you need to create a Telegram bot, follow the instructions.

1. On your Telegram App clic the pencil to create a new message.
2. On your Telegram App clic the magnifying glass to search a user and write: @botfather
3. Go to the chat and use commands with the slash symbol / to execute it
4. Create a new bot: /newbot 
5. Store the token on your config value.
6. Install the code with npm install.
7. Use the code of showMyChatId to get your chatId, while is executing then write something to the bot, this will show you a message with your id, put it on the code.

```js
const showMyChatId = require('../is-server-alive').showMyChatId

const token = 'INTRODUCE_YOUR_BOT_TOKEN_HERE'

showMyChatId(token)
```

## How to use the API
```js
const isServerAlive = require('../is-server-alive').isServerAlive

const config = {
    token: 'INTRODUCE_YOUR_BOT_TOKEN_HERE',
    chatId: INTRODUCE_YOUR_CHAT_ID,
    targets: ['google.com', '121.113.113.41'], // Array of strings: Domains and URLs
    options: {
        timeout: 5, // Time to wait for the ping response.
        extra: ["-i 2"], // Number of ping petitions.
    },
    intervalTimeout: 5000,  // Interval of the request against the server. 5000 -> 5 seconds.
}

isServerAlive(config)
```

# Execute and Monit
After complete the information you can use this commands.

Noob command to run the software
```js 
npm run test
```

Pro command to run the software on the background.
```js 
npm run start
```

You can monit your code. To stop it use: control+c
```js 
npm run monit
```

Check the status (Not kill other process we are using pm2).
```js 
npm run status
```

Stop Execution.
```js 
npm run stop
npm run kill
```

# Community
I give an special mention to the GitHub community:
* node-telegram-bot-api: https://github.com/yagop/node-telegram-bot-api
* Ping: https://github.com/danielzzz/node-ping
* P2m: https://github.com/Unitech/pm2
* Telegram API: https://core.telegram.org/ 