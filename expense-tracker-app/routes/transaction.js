// TRANSACTION ROUTES

const express = require('express');

const transactionController = require('../controllers/transaction/transaction');
const views = require('../controllers/transaction/transactionView');

const transactionRouter = express.Router();

// const showJSON = (req, res) => {
//   res.json(res.locals.data);
// };

const handle404 = (err, req, res, next) => {
  console.log(err);
  res.sendStatus(404);
};

const send400 = (err, req, res, next) => {
  console.log(err);
  res.sendStatus(400);
};
// Routes are taking some path '/' followed by a http verb 'get, post, delete, put'
transactionRouter.route('/new')
  .get(views.createTransaction)
  .post(transactionController.create, views.handleRefresh);

transactionRouter.route('/:id/edit')
  .get(transactionController.getOne, views.editTransaction);

transactionRouter.route('/:id')
  .get(transactionController.getOne, views.showTransaction)
  .delete(transactionController.destroy, views.handleRefresh)
  .put(transactionController.update, views.handleUpdate);

transactionRouter.route('/')
  // Firing off the middleware that will grab the data, followed by another middleware that will display that data
  .get(transactionController.getAll, views.showTransactions);

transactionRouter.use(handle404);

module.exports = transactionRouter;
