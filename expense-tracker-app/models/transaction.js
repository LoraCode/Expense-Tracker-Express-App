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

module.exports = {
  findAll,
  findOne,
};
