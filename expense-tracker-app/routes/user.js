// // USER ROUTES

// const userRouter = require('express').Router();
// const authController = require('../controllers/auth');
// const userView = require('../controllers/userViewController');
// const authView = require('../controllers/authViewController');


userRouter.route('/profile')
  .get(authController.loginRequired, userView.showUserProfile)
  .delete(authController.logout, authView.redirectToLogin);


// module.exports = userRouter;
