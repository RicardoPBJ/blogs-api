const errorHandler = (error, _req, res, _next) => {
  if (error.status) {
    res.status(error.status).json({ message: error.message });
  } else {
    res.status(500).json({ message: error.message });
  }
};

module.exports = errorHandler;