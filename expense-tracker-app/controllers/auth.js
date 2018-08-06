// AUTH CONTROLLER

const bcrypt = require('bcrypt');
const db = require('../models/user');
const views = require('../controllers/authViewController');
// compare entered password with password_digest from database
const checkPassword = (loginAttempt, userInfo) => {
  const validPassword = bcrypt.compareSync(loginAttempt.password, userInfo.password_digest);

  if (!validPassword) {
    return false;
  }

  return userInfo;
};

const login = (req, res, next) => {
  const loginAttempt = {
    username: req.body.username,
    password: req.body.password,
  };
  // Check if entered username matches a registered user
  db.findByUsername(loginAttempt.username)
    // Then check if passwords are a match
    .then(user => checkPassword(loginAttempt, user))
    .then((validAttempt) => {
      if (!validAttempt) {
        throw {
          message: 'Invalid Credentials',
        };
      }
      // Give okay for returning user
      req.session.user = validAttempt;
      next();
    })
    .catch(() => {
      // Redirect back to login page
      views.loginError(req, res, next);
    });
};

const register = (req, res, next) => {
  // Convert SALT value from .env to an integer
  const salt = parseInt(process.env.SALT);
  // Hash registered password with hidden number of SALT rounds
  const hash = bcrypt.hashSync(req.body.password, salt);
  // Registered user's credentials
  const user = {
    username: req.body.username,
    password_digest: hash,
  };
  // Store credentials into database
  db.saveUser(user)
    .then((user) => {
      if (!user) {
        throw {
          message: 'Try again',
        };
      }
      // Okay now remember this user
      req.session.user = user;
      next();
    })
    .catch((err) => {
      views.registerError(req, res, next);
    });
};

const logout = (req, res, next) => {
  // End the session
  req.session.destroy(err => next(err));
};

module.exports = {
  login,
  register,
  logout,
};
