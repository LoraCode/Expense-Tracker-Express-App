// EXPRESS SERVER CONFIGURATION

require('dotenv').config();

// Acquire dependencies
const express = require('express');

const logger = require('morgan');
const path = require('path');
// Intercepts incoming requests and stores its data into req.body
const bodyParser = require('body-parser');
// Enables the use of PUT and DELETE
const methodOverride = require('method-override');
// Allows server to remember users
const session = require('express-session');
// Used to display messages to the DOM
const flash = require('connect-flash');

const transactionRouter = require('./routes/transaction');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');

const PORT = process.env.PORT || 3000;
// Initializing app
const app = express();
// Initializing morgan
app.use(logger('dev'));

// Set the secret using the SERVER_SECRET key stored in the .env file
app.set('server_secret', process.env.SERVER_SECRET);
// Allow app to create session for users using SERVER_SECRET key. Other options are boilerplate.
console.log('secret: ', app.get('server_secret'));
app.use(session({
  secret:            app.get('server_secret'),
  resave:            false,
  saveUninitialized: false,
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method'));

app.use(flash());
// Mounting routes
app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/transactions', transactionRouter);

app.get('/', (req, res) => {
  res.render('Index');
});

// Allow app to send a json object for routes our app does not recognize
app.use('*', (err, req, res, next) => {
  res.status(400).json({
    error: err,
    message: err.message,
  });
});

// Render json object for server errors
app.use((err, req, res, next) => {
  res.status(500).json({
    error: err,
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Sever up and listening on ${PORT}, in ${app.get('env')} mode.`);
});
