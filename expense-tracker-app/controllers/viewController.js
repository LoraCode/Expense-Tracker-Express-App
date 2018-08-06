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

module.exports = {
  showTransactions,
  showTransaction,
};
