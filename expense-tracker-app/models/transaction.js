// TRANSACTION MODEL

const db = require('../config');

function findAll() {
  return db.many(`
      SELECT *
      FROM transaction
      `);
}

module.exports = {
  findAll,
};
