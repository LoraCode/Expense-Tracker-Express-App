// TRANSACTION CONTROLLER

const db = require('../../models/transaction');

const getAll = async (req, res, next) => {
  try {
    const transactions = await db.findAll();
    res.locals.data = transactions;
    next();
  } catch (err) {
    next(err);
  }
};

// Not using users/Auth

// const empytTransaction = async (req, res, next) => {
//   const { description, amount, category_name } = req.body;
//   try {
//     await db.saveTransaction({ description, amount, category_name });
//     res.redirect('/transactions');
//   } catch (err) {
//     next(err);
//   }
// };

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

const update = async (req, res, next) => {
  try {
    const { description, amount, category_name } = req.body;
    const modifiedTransaction = {
      id: req.params.id,
      description,
      amount,
      category_name,
    };
    const updateTransaction = await db.update(modifiedTransaction);
    res.locals.data = updateTransaction;
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
  // empytTransaction,
  getOne,
  create,
  update,
  destroy,
};
