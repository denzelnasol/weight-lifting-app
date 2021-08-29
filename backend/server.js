const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require("body-parser")
const passport = require("passport")

const users = require("./routes/users");

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

// app.use(
//     bodyParser.urlencoded({
//       extended: false
//     })
//   );
//   app.use(bodyParser.json());

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

const connection = mongoose.connection

connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})

const exercisesRouter = require('./routes/exercises')
const exercisesInformationRouter = require('./routes/exercisesInformation')

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

app.use('/exercises', exercisesRouter)
app.use('/exercisesInformation', exercisesInformationRouter)
app.use('/users', users);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
