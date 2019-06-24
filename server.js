// Environment variables
require('dotenv').config();

const http = require('http');
const app = require('express')();

require('./config/database.js');

require('./modules/cron.js');
// Body Parse
const bodyParser = require('body-parser');

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Express Settings
app.set('port', process.env.PORT);

// CORS
app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Request-Headers', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept,Access-Control-Allow-Headers, Authorization, X-L10N-Locale');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

// HTTP Logger
const morgan = require('morgan');

app.use(morgan('combined'));

// Router
app.use('/api/v1', require('./routes/v1'));
app.use('/app', require('./routes/common')); // for common page

// Start server
const server = http.createServer(app);

app.get('/', function (req, res) {
  res.send('Welcom to AWS, Node OCR - Optical Character Recognition demo...');
});

server.listen(process.env.PORT, () => {
  console.log('Node project running...');
});

module.exports = app;
