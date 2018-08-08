// USER ROUTES

const userRouter = require('express').Router();
const authController = require('../controllers/auth/auth');
const authView = require('../controllers/auth/authView');
const userController = require('../controllers/user/user');
const userView = require('../controllers/user/userView');

// userRouter.route('/profile')
//   .get(authController.loginRequired, userView.showUserProfile)
//   .delete(authController.logout, authView.redirectToLogin);

userRouter.route('/:user/profile')
  .get(authController.loginRequired, userController.getOne, userView.showUserProfile);

module.exports = userRouter;
