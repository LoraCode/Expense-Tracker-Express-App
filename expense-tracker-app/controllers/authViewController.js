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
  next();
};

const showLoginForm = (req, res) => {
  res.render('auth/login', {
    messages: req.flash('error'),
  });
};

const showRegisterForm = (req, res) => {
  res.render('auth/register', {
    messages: req.flash('error'),
  });
};

const redirectToLogin = (req, res) => {
  res.redirect('/auth/login');
};

// module.exports = {
//   loginError,
//   registerError,
//   showLoginForm,
//   showRegisterForm,
//   redirectToLogin,
// };
