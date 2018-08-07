// TRANSACTION MODEL

const db = require('../config/dbConnection');

const findAll = () => db.many(`
  SELECT *
  FROM transactions
`);

const findOne = id => db.one(`
  SELECT *
  FROM transactions
  WHERE id = $1
`, id);

const saveTransaction = transaction => db.one(`
  INSERT INTO transactions (description, amount, category_name)
  VALUES ($/description/, $/amount/, $/category_name/)
  RETURNING *
  `, transaction);

const update = transaction => db.one(`
  UPDATE transactions
  SET description = $/description/, amount = $/amount/, category_name = $/category_name/
  WHERE id = $/id/
  `);

const destroy = id => db.none(`
  DELETE
  FROM transactions
  WHERE id = $1
  `, id);

module.exports = {
  findAll,
  findOne,
  saveTransaction,
  update,
  destroy,
};
