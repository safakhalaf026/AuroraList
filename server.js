require('dotenv').config() //allow us to use .env vars
require('./config/database.js') // invoke DB connection

const express = require('express')
const path = require('path')

const app = express() // create express application

// Sessions
const session = require('express-session') // to be able to create sessions
const { MongoStore } = require('connect-mongo') // to save sessions in DB

// Middleware
const methodOverride = require('method-override')
const morgan = require('morgan')
const passUserToView = require('./middleware/passUserToView.js')
const isSignedIn = require('./middleware/isSignedIn.js')

// Controllers
const authCtrl = require('./controllers/auth')
const pagesCtrl = require('./controllers/pages.js')
const itemsCtrl = require('./controllers/items.js')

const port = process.env.PORT ? process.env.PORT : '3000' // Set the port from environment variable or default to 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false })) // Middleware to parse URL-encoded data from forms
app.use(methodOverride('_method')) // Middleware for using HTTP verbs such as PUT or DELETE
app.use(morgan('dev')) // Morgan for logging HTTP requests

// Session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
    }),
  })
)

// Locals
app.use(passUserToView) // reads and initializes the cookie
 
// ---------- PUBLIC ROUTES ----------
app.use('/auth', authCtrl) // an req starting with this prefix will be forwarded to the authCtrl

// ---------- PROTECTED ROUTES ----------
app.use(isSignedIn) // must be placed BEFORE routes we want to protect to authorize sign in
app.use('/', pagesCtrl)
app.use('/items', itemsCtrl)

// Listener 
app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`)
})
