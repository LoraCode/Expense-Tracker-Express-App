/* DATABASE CONFIGURATION */

module.exports = process.env.DATABASE_URL || {
  // URL where database is located
  host: 'localhost',
  // Port where database is configured
  port: 5432,
  // Database name
  database: 'expenses_dev',
};
