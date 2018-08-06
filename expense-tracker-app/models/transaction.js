// TRANSACTION MODEL

const db = require('../config/dbConnection');

const findAll = () => db.many(`
      SELECT *
      FROM transactions
      `);

module.exports = {
  findAll,
};
