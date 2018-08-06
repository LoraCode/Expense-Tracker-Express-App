// AUTH CONTROLLER

const bcrypt = require('bcrypt');
const db = require('../models/user');
const views = require('../controllers/authViewController');

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

  db.findByUsername(loginAttempt.username)
    .then(user => checkPassword(loginAttempt, user))
    .then((validAttempt) => {
      if (!validAttempt) {
        throw {
          message: 'Invalid Credentials',
        };
      }
      req.session.user = validAttempt;
      next();
    })
    .catch(() => {
      views.loginError(req, res, next);
    });
};

module.exports = {
  login,
};
