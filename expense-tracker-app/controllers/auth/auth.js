/* AUTH CONTROLLER */
// Refactored auth code shown by GA Instructor using async syntax and implemented few more functions

// Bcrypt will be used to hash the plain text password (register phase) and compare password_digest
const bcrypt = require('bcrypt');
const db = require('../../models/user');
const authView = require('./authView');

// REGISTER CONFIGURATION

const register = async (req, res, next) => {
  // Convert SALT value from .env to an integer
  const salt = parseInt(process.env.SALT);
  // Hash registered password with hidden number of SALT rounds
  const hash = bcrypt.hashSync(req.body.password, salt);
  // Registered user's credentials
  const user = {
    username: req.body.username,
    email: req.body.email,
    password_digest: hash,
  };
  try {
    // Store credentials into database
    const savedUser = await db.createUser(user);
    // Store user's cookie for when they try to log in
    req.session.user = savedUser;
    // Call next piece of middleware
    next();
  } catch (err) {
    // Display register error message to user
    authView.registerError(req, res, next);
  }
};

// LOGIN CONFIGURATION

// Compare entered password with password_digest from database
const checkPassword = (loginAttempt, userInfo) => {
  const validPassword = bcrypt.compareSync(loginAttempt.password, userInfo.password_digest);
  if (!validPassword) {
    return false;
  }
  return userInfo;
};
// Compare entered email with logged user email from database
const checkEmail = (loginAttempt, userInfo) => {
  let validEmail = false;
  // Return true if inputted email matches with email from database
  if (loginAttempt.email === userInfo.email) {
    validEmail = true;
  }
  return validEmail;
};

const login = async (req, res, next) => {
  const loginAttempt = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };
  try {
    // Check if entered username matches a registered user
    const validUserInfo = await db.findByUsername(loginAttempt.username);
    // Check if entered email matches with registered user email
    const validEmail = checkEmail(loginAttempt, validUserInfo);
    // If entered email does not match with the user email in the database, throw an error
    if (!validEmail) throw 'Invalid Credentials';
    // Then check if passwords are a match
    const validAttempt = await checkPassword(loginAttempt, validUserInfo);
    // If validAttempt gets rejected, entered password did not match with password_digest from database. Throw an Error
    if (!validAttempt) throw 'Invalid Credentials'; 
    // If validAttempt resolves
    else {
      // Give okay for returning user
      req.session.user = validAttempt;
      // Call next piece of middleware
      next();
    }
    // If any errors are thrown or any unhandled errors appear within try, catch and display login error handler middleware
  } catch (err) {
    // Redirect back to login page
    authView.loginError(req, res, next);
  }
};

const logout = (req, res, next) => {
  // End the session and take user back to the login screen
  req.session.destroy(err => next(err));
};

const loginRequired = [
  /* this is either going to resolve to next(false) or next(null) */
  // Enforces user to be logged in
  (req, res, next) => next(!req.session.user || null),
  (err, req, res, next) => res.sendStatus(401),
];

module.exports = {
  register,
  login,
  logout,
  loginRequired,
};
