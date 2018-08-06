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

const create = async (req, res, next) => {
  try {
    const { description, amount, category_name } = req.body;
    const newTransaction = await db.saveTransaction({ description, amount, category_name });
    res.locals.data = newTransaction;
    next();
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await db.destroy(req.params.id);
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
  getOne,
  create,
  destroy,
};
