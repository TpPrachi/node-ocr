// Daily Batch - 12:00 JST
const cron = require('node-cron');

// '0 0 * * *' Every Midnight At 00:00.
cron.schedule('0 12 * * *', () => {

});
