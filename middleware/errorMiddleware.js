// @desc Handles the errors. In development returns the exact error, in production it doesn't return the exact error
const errorHandler = (err, req, res, next) => {
    //If there's an error, gets it, otherwise returns 500 error
    const statusCode = res.statusCode ? res.statusCode : 500
  
    res.status(statusCode)
    //returns the actual error in development environment
    res.json({
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })
  }
  
  module.exports = {errorHandler}