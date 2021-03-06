// USER MODEL

// Import connected database
const db = require('../config/dbConnection');

// Will be used as a lookup to check for validity
const findByUsername = username => db.one(`
  SELECT * 
  FROM users
  WHERE username = $1
`, username);
// Saves user's data into database
const createUser = user => db.one(`
  INSERT INTO users (username, email, password_digest)
  VALUES ($/username/, $/email/, $/password_digest/)
  RETURNING *
`, user);
// Find user's by id to match and show that particular user's transactons
const findByUserId = id => db.one(`
  SELECT *
  FROM users
  WHERE id = $1
`, id);

module.exports = {
  findByUsername,
  createUser,
  findByUserId,
};
