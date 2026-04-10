const fs = require('fs');

setInterval(() => {
    const levels = ["INFO", "ERROR", "WARN"];
    const level = levels[Math.floor(Math.random() * levels.length)];

    const log = `${new Date().toISOString()} [${level}] Sample log message\n`;

    fs.appendFileSync('./logs/app.log', log);
    console.log(log);
}, 2000);