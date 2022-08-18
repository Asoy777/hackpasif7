const express = require('express')
const router = require('./routes')
const app = express()
const session = require('express-session')
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(session({
  secret: 'bla bla',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, sameSite: false }
}))
app.use(router)


app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}/`)
})