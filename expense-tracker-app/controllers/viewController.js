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

const editTransaction = (req, res) => {
  res.render('editTransaction');
};

const handleUpdate = (req, res) => {
  const { id } = req.params;
  res.redirect(`/transactions/${id}`);
};

const handleRefresh = (req, res) => {
  res.redirect('/transactions');
};

module.exports = {
  showTransactions,
  showTransaction,
  createTransaction,
  editTransaction,
  handleUpdate,
  handleRefresh,
};
