const express = require('express')
const UserController = require('../controllers/UserController')
const router = express.Router()

// router.get('/', (req, res) => {
//   res.send('Hello World!')
// })

router.get('/', )
router.get('/auth/register', UserController.registerForm)
router.post('/auth/register', UserController.postRegister)
router.get('/auth/login', UserController.loginForm)
router.post('/auth/login', UserController.postLogin)

router.get('/course', ) //show all courses (??)
router.get('/course/:courseId', ) //show courses detail (?)
router.get('/course/:courseId/edit', ) //edit course (only admin??)
router.get('/course/:courseId/delete', )

router.get('/auth/login', )
router.get('/auth/login', )
router.post('/auth/login', )






module.exports = router