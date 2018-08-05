// TRANSACTION CONTROLLER

const db = require('../models/transaction');

function index(req, res, next) {
  db.findAll()
    .then((transactions) => {
      res.locals.data = transactions;
      next();
    })
    .catch(err => next(err));
}

module.exports = {
  index,
};
