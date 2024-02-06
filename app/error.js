const notFoundHandler = (req, res, next) => {
  const err = new Error("404 Content Not found!");
  err.status = 400;
  next(err);
};

const errorHandler = (err, req, res, next) => {
  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  }

  res.status(500).json({ Error: err.message });
};

module.exports = {
  notFoundHandler,
  errorHandler,
};
