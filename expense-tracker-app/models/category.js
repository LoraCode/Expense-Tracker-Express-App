/* CATEGORY MODEL */

const db = require('../config/dbConnection');

const findAll = () => db.many(`
  SELECT *
  FROM categories
`);

const findOne = id => db.one(`
  SELECT *
  FROM categoires
  WHERE id = $1
`, id);

const saveCategory = category => db.one(`
  INSERT INTO categories (name)
  VALUES ($/name/)
  RETURNING *
`, category);

const destroy = id => db.none(`
  DELETE
  FROM categoires
  WHERE id = $1
`, id);

module.exports = {
  findAll,
  findOne,
  saveCategory,
  destroy,
};
