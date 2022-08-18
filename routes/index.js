const express = require('express')
const router = express.Router()
const user = require('./user')
const Controller = require('../controllers')

router.get('/', Controller.home)
router.get('/register', Controller.add) // done
router.post('/register', Controller.create) // done
router.get('/login', Controller.loginForm) // done
router.post('/login', Controller.postLogin) // done
router.get('/logout', Controller.logout)

router.use((req, res, next) => {
  if(!req.session.userId) {
    const error = `Please log in`
    res.redirect(`/login?err=${error}`)
  }
  next()
})

router.use('/user', user)

module.exports = router

// implement user course
// implement static method
// implement validasi
// implement helper
// kalo ada waktu tambahin hook selain bcrypt
// implement mvp
