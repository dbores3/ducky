const asyncHandler = require('express-async-handler')

// @desc    Translate kilograms CO2 equivalent to an area of trees that can absorb the CO2 in one year
// @route   POST /translate/tree
// @access  Public
const translateTree = asyncHandler(async (req, res) => {
    const { kgco2e } = req.body

    //Formula to get the area of trees needed to absorb the given amount of kgCO2e in one year.
    const m2Year = Math.round(kgco2e / 0.049) //Rounds the number to nearest integer with Math.round

    res.status(200).json({ m2Year })
})

module.exports = {translateTree}