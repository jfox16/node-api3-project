function logger(req, res, next) {
  // DO YOUR MAGIC
  const method = req.method;
  const url = req.originalUrl;
  const date = new Date();
  console.log(`[${date.toLocaleString()}] ${method} to ${url}`);
  next();
}

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
  console.log('Running validateUserId middleware');
  next();
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
  console.log('Running validateUser middleware');
  next();
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
  console.log('Running validatePost middleware');
  next();
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost
}