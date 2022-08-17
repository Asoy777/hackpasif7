const express = require('express')
const Controller = require('../controllers')
const UserController = require('../controllers/UserController')
const router = express.Router()


router.get('/', Controller.home)

router.get('/auth/register', UserController.registerForm)
router.post('/auth/register', UserController.postRegister)
router.get('/auth/login', UserController.loginForm)
router.post('/auth/login', UserController.postLogin)


router.get('/course', ) //show all courses (??)
router.get('/course/:courseId', ) //show courses detail (?)
router.get('/course/:courseId/edit', ) //edit course (only admin??)
router.post('/course/:courseId/edit', ) //edit course (only admin??)
router.get('/course/:courseId/delete', )

router.get('/user/:userId')
router.get('/user/:userId/edit')
router.post('/user/:userId/edit')

module.exports = router