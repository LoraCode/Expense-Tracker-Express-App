// TRANSACTION CONTROLLER

const db = require('../models/transaction');

const index = async (req, res, next) => {
  try {
    const transactions = await db.findAll();
    res.locals.data = transactions;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  index,
};
