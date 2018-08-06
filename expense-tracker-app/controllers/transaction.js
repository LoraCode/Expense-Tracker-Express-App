// TRANSACTION CONTROLLER

const db = require('../models/transaction');

const getAll = async (req, res, next) => {
  try {
    const transactions = await db.findAll();
    res.locals.data = transactions;
    next();
  } catch (err) {
    next(err);
  }
};

const getOne = async (req, res, next) => {
  try {
    const transaction = await db.findOne(req.params.id);
    res.locals.data = transaction;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
  getOne,
};
