// AUTH VIEW CONTROLLER

// Display an error message if its not a Returning user
const loginError = (req, res) => {
  if (!req.session.user) {
    req.flash('error', 'Invalid Login Credentials');
    res.redirect('/auth/login');
  }
};
// Display an error message if inputed username matches an existing users username
const registerError = (req, res) => {
  if (!req.session.user) {
    req.flash('error', 'Unable to register');
    res.redirect('/auth/register');
  }
  // CALLED NEXT HERE AND IT GAVE ME AN ERROR 500 WHERE I WAS SENDING TWO RESPONSES
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

module.exports = {
  loginError,
  registerError,
  showLoginForm,
  showRegisterForm,
  redirectToLogin,
};
