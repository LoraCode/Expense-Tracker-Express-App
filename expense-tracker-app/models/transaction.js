// TRANSACTION MODEL

const db = require('../config/dbConnection');

const findAll = () => db.many(`
  SELECT *
  FROM transactions
`);

const findOne = id => db.one(`
  SELECT *
  FROM transactions AS t
  WHERE t.id = $1
`, id);

const saveTransaction = transaction => db.one(`
  INSERT INTO transactions (description, amount, category_name)
  VALUES ($/description/, $/amount/, $/category_name/)
  RETURNING *
  `, transaction);

const destroy = id => db.none(`
  DELETE
  FROM transactions
  WHERE id = $1
  `, id);

module.exports = {
  findAll,
  findOne,
  saveTransaction,
  destroy,
};
