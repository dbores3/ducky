const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')

//Server Port
const port = process.env.PORT || 5000

const app = express()
//Built in middlewares
app.use(express.json()) //Parses requests with JSON payloads
app.use(express.urlencoded({ extended: false })) //parses incoming requests *strin or array when extended false

//Routes
app.use('/translate/tree', require('./routes/TreeRoutes'))

//Error Handler (production/development)
app.use(errorHandler)

//Binds & listens the connections to the specified port
app.listen(port, () => console.log(`Server started on port ${port}`))