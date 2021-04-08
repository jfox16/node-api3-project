const User = require('../users/users-model');

function logger(req, res, next) {
  const method = req.method;
  const url = req.originalUrl;
  const date = new Date();
  console.log(`[${date.toLocaleString()}] ${method} to ${url}`);
  next();
}

function validateUserId(req, res, next) {
  User.getById(req.params.id)
    .then(user => {
      if (user) {
        next();
      }
      else {
        res.status(404).json({ message: 'user not found' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
}

function validateUser(req, res, next) {
  if (!req.body.name) {
    res.status(400).json({ message: "missing required name field" });
  }
  else {
    next();
  }
}

function validatePost(req, res, next) {
  if (!req.body.text) {
    res.status(400).json({ message: "missing required text field" });
  }
  else {
    next();
  }
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost
}