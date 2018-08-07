// USER MODEL

const db = require('../config/dbConnection');

const findByUsername = username => db.one(`
  SELECT *
  FROM users
  WHERE username = $1
`, username);

const findById = id => db.one(`
  SELECT id, username, created_at
  FROM users
  WHERE id = $1
`, id);

const saveUser = user => db.one(`
  INSERT INTO users (username, password_digest)
  VALUES ($/username/, $/password_digest/)
  RETURNING *
`, user);

// module.exports = {
//   findByUsername,
//   findById,
//   saveUser,
// };
