const { validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler')

const validateRequest = asyncHandler(async (req, res,next) => {
    //returns the errors checked in the route
    const errors = validationResult(req)

    //if errors, sends them
    if(!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() })
    else
        next()
})

module.exports = {validateRequest}