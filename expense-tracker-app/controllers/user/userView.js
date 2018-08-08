// USER VIEW CONTROLLER

const handleUserProfile = (req, res) => {
  res.redirect('/users/:user/profile');
};

const handleLogout = (req, res) => {
  res.redirect('/');
};

const showUserProfile = (req, res) => {
  res.render('users/:user/profile', {
    user: req.session.user,
  });
};

module.exports = {
  handleUserProfile,
  handleLogout,
  showUserProfile,
};
