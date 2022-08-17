const express = require('express')
const Controller = require('../controllers/controller')
const router = express.Router()
// router.get('/', (req, res) => {
//   res.send('Hello World!')
// })

router.get('/', Controller.home)
router.get('/auth/register', )
router.post('/auth/register', )
router.get('/auth/login', )
router.post('/auth/register', )

router.get('/course', ) //show all courses (??)
router.get('/course/:courseId', ) //show courses detail (?)
router.get('/course/:courseId/edit', ) //edit course (only admin??)
router.get('/course/:courseId/delete', )

router.get('/auth/login', )
router.get('/auth/login', )
router.post('/auth/login', )






module.exports = router