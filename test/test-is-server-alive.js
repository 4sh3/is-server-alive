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