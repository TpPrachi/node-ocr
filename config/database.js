const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DbUrl);
mongoose.connection.on('error', (err) => {
  console.log(err);
});
