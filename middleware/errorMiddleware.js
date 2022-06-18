// @desc Handles the errors. In development returns the exact error, in production it doesn't return the exact error
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
  
    res.status(statusCode)
  
    res.json({
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })
  }
  
  module.exports = {errorHandler}