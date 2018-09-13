/* TRANSACTION CONTROLLER */
// MANIPULATING BY PASSING DATA FROM DATABASE

// Import connected database
const db = require('../../models/transaction');

// Pull every transaction data from database
const getAll = async (req, res, next) => {
  try {
    const transactions = await db.findAll();
    res.locals.data = transactions;
    next();
  } catch (err) {
    next(err);
  }
};

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
    // Wait for promise to resolve
    const transaction = await db.findOne(req.params.id);
    // Store that data into res.locals
    res.locals.data = transaction;
    next();
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  // Destructure object recieved from a form and assign it to the request's body
  const { description, amount, category_name } = req.body;
  try {
    const newTransaction = await db.saveTransaction({ description, amount, category_name });
    res.locals.data = newTransaction;
    next();
  } catch (err) {
    next(err);
  }
};
// Take already existing data and edit/change it through our update model function
const update = async (req, res, next) => {
  const { description, amount, category_name } = req.body;
  const modifiedTransaction = {
    id: req.params.id,
    description,
    amount,
    category_name,
  };
  try {
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
