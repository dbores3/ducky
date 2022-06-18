const express = require('express')
const { check } = require('express-validator');
const router = express.Router()

//Controllers
const {translateTree} = require('../controllers/translateTreeController')

//Middlewares
const {validateRequest} = require('../middleware/validatePostMiddleware')
//const { protect } = require('../middleware/authMiddleware')

//Route to translate kilograms CO2 equivalent to an area of trees that can absorb the CO2 in one year
router.post('/', 
    //protect,
    [ 
        //Post validation & sanitization
        check('kgco2e').not().isEmpty().isNumeric().trim().escape().withMessage('Please send a valid CO2 number. Ex. 100'),
        check('kgco2e').isFloat({min:0}).withMessage('Please send a valid positive CO2 number. Ex. 100'),
    ],
    validateRequest,
    translateTree
)

module.exports = router