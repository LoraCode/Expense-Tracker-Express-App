// AUTH ROUTES

const express = require('express');
const authController = require('../controllers/auth');
const authView = require('../controllers/authViewController');

const authRouter = express.Router();

authRouter.route('/login')
  .get(authView.showLoginForm)
  .post(authController.login, authView.loginError);

authRouter.route('/register')
  .get(authView.showRegisterForm)
  .post(authController.register, authView.registerError);

module.exports = authRouter;
