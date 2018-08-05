// TRANSACTION MODEL

const db = require('../config/dbConnection');

function findAll() {
  return db.many(`
      SELECT *
      FROM transactions
      `);
}

module.exports = {
  findAll,
};
