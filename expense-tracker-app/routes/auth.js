// AUTH ROUTES

// const authRouter = require('express').Router();
// const authController = require('../controllers/auth');
// const userView = require('../controllers/userViewController');
// const authView = require('../controllers/authViewController');

authRouter.route('/login')
  .get(authView.showLoginForm)
  .post(authController.login, userView.handleUserProfile);


authRouter.route('/register')
  .get(authView.showRegisterForm)
  .post(authController.register, userView.handleUserProfile, authView.registerError);


// module.exports = authRouter;
