/* DATABASE CONFIGURATION */

const config = {
  // URL where database is located
  host: process.env.DB_HOST || 'localhost',
  // Port where database is configured
  port: process.env.DB_PORT || 5432,
  // Database name
  database: process.env.DB_NAME || 'expenses_dev',
};

module.exports = config;
