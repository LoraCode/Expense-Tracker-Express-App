// USER ROUTES

const userRouter = require('express').Router();
const authController = require('../controllers/auth/auth');
const authView = require('../controllers/auth/authView');
const userView = require('../controllers/user/userView');

userRouter.route('/profile')
  .get(authController.loginRequired, userView.showUserProfile)
  .delete(authController.logout, authView.redirectToLogin);


module.exports = userRouter;
