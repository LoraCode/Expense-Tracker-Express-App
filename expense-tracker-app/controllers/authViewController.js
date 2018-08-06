// AUTH VIEW CONTROLLER

const loginError = (req, res, next) => {
  if (!req.session.user) {
    req.flash('error', 'Invalid Login Credentials');
    res.redirect('/auth/login');
  }
  next();
};

const registerError = (req, res, next) => {
  if (!req.session.user) {
    req.flash('error', 'Unable to register');
    res.redirect('/auth/register');
  }
};

module.exports = {
  loginError,
  registerError,
};
