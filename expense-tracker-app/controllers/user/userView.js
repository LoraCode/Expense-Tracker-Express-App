/* USER VIEW CONTROLLER */

const handleUserProfile = (req, res) => {
  res.redirect('/users/profile');
};

const handleLogout = (req, res) => {
  res.redirect('/');
};

const showUserProfile = (req, res) => {
  res.render('users/profile', {
    user: req.session.user,
  });
};

module.exports = {
  handleUserProfile,
  handleLogout,
  showUserProfile,
};
