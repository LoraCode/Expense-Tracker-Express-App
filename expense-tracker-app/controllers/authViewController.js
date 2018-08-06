// AUTH VIEW CONTROLLER

const loginError = (req, res, next) => {
  if (!req.session.user) {
    req.flash('error', 'Invalid Login Credentials');
    res.redirect('/auth/login');
  }
  next();
};

module.exports = {
  loginError,
};
