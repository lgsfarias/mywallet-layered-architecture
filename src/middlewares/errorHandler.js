function errorHandler(error, req, res, next) {
  console.error(error);
  res.status(500).send('Internal server error');
}

export default errorHandler;
