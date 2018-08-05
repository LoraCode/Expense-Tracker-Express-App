// VIEW CONTROLLER

const showTransactions = (req, res) => {
  res.render('showTransactions', {
    transactions: res.locals.data,
  });
};

module.exports = {
  showTransactions,
};
