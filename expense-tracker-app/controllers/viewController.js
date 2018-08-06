// VIEW CONTROLLER

const showTransactions = (req, res) => {
  res.render('showTransactions', {
    transactions: res.locals.data,
  });
};

const showTransaction = (req, res) => {
  res.render('showTransaction', {
    transaction: res.locals.data,
  });
};

const createTransaction = (req, res) => {
  res.render('createTransaction');
};

module.exports = {
  showTransactions,
  showTransaction,
  createTransaction,
};
