// AUTH ROUTES

const authRouter = require('express').Router();
const authController = require('../controllers/auth/auth');
const userView = require('../controllers/user/userView');
const authView = require('../controllers/auth/authView');

authRouter.route('/login')
  .get(authView.showLoginForm)
  .post(authController.login, userView.handleUserProfile, authView.loginError);

authRouter.route('/register')
  .get(authView.showRegisterForm)
  .post(authController.register, userView.handleUserProfile, authView.registerError);

module.exports = authRouter;
