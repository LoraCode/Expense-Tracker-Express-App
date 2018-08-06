// EXPRESS SERVER CONFIGURATION

// Acquire dependencies
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');

const transactionRouter = require('./routes/transaction');

const PORT = process.env.PORT || 3000;

const app = express();

// app.use(express.static());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(methodOverride('_method'));

app.use('/transactions', transactionRouter);

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`Sever up and listening on ${PORT}, in ${app.get('env')} mode.`);
});
