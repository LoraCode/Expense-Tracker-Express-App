/* PG-PROMISE CONFIGURATION */

// Importing database
const config = require('./dbConfig');
// Init pg-promise
const pgp = require('pg-promise')();
// Connecting databse with pg-promise
module.exports = pgp(config);
