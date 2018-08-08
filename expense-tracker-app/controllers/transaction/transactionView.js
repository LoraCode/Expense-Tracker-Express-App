/* TRANSACTION VIEW CONTROLLER */

const showTransactions = (req, res) => {
  res.render('transactions/showTransactions', {
    transactions: res.locals.data,
  });
};

const showTransaction = (req, res) => {
  res.render('transactions/showTransaction', {
    transaction: res.locals.data,
  });
};

const createTransaction = (req, res) => {
  res.render('transactions/createTransaction');
};

const editTransaction = (req, res) => {
  res.render('transactions/editTransaction');
};

const handleUpdate = (req, res) => {
  const { id } = req.params;
  res.redirect(`user/profile/transactions/${id}`);
};

const handleRefresh = (req, res) => {
  res.redirect('user/profile/transactions');
};

module.exports = {
  showTransactions,
  showTransaction,
  createTransaction,
  editTransaction,
  handleUpdate,
  handleRefresh,
};
