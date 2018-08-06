const express = require('express');

const transactionController = require('../controllers/transaction');
const views = require('../controllers/viewController');

const transactionRouter = express.Router();

const showJSON = (req, res) => {
  res.json(res.locals.data);
};

const handle404 = (err, req, res, next) => {
  console.log(err);
  res.sendStatus(404);
};

const send400 = (err, req, res, next) => {
  console.log(err);
  res.sendStatus(400);
};

transactionRouter.route('/new')
  .get(views.createTransaction)
  .post(transactionController.create, views.handleRefresh);

transactionRouter.route('/:id')
  .get(transactionController.getOne, views.showTransaction)
  .delete(transactionController.destroy, views.handleRefresh);

transactionRouter.route('/')
  .get(transactionController.getAll, views.showTransactions);

transactionRouter.use(handle404);

module.exports = transactionRouter;
