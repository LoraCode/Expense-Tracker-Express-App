const db = require('../../models/user');

const getOne = async (req, res, next) => {
  try {
    // Wait for promise to resolve
    const user = await db.findByUsername(req.params.user);
    // Store that data into res.locals
    res.locals.data = user;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getOne,
};
