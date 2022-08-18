const express = require('express')
const router = express.Router()

const user = require('./user')
const admin = require('./admin')
const teacher = require('./teacher')
const student = require('./student')

const Controller = require('../controllers')
const UserController = require('../controllers/userController')


router.get('/', Controller.home)
router.get('/register', Controller.add) // done
router.post('/register', Controller.create) // done
router.get('/login', Controller.loginForm) // done
router.post('/login', Controller.postLogin) // done

router.use('/user', user)
router.use('/admin', admin)
router.use('/teacher', teacher)
router.use('/student', student)

module.exports = router

// implement user course
// implement log out
// implement static method
// implement validasi
// implement helper
// kalo ada waktu tambahin hook selain bcrypt
// implement mvp
