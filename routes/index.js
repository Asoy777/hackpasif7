const express = require('express')
const Controller = require('../controllers')
const CourseController = require('../controllers/courseController')
const UserController = require('../controllers/userController')
const router = express.Router()


// router.get('/', Controller.home)

router.get('/', (req, res) => {
    res.render('editUserProfile')
  })

// router.get('/', (req, res) => {
//   res.render('')
// })

router.get('/user/register', UserController.add) // done
router.post('/user/register', UserController.create) // done
router.get('/user/login', UserController.loginForm) // done
router.post('/user/login', UserController.postLogin) // done


router.get('/course', CourseController.list) // done
router.get('/course/add', CourseController.add)
router.post('/course/add', CourseController.create)
router.get('/course/:courseId', CourseController.detail)
router.get('/course/:courseId/edit', CourseController.edit)
router.post('/course/:courseId/edit', CourseController.update)
router.get('/course/:courseId/delete', CourseController.delete)

router.get('/user/:userId', UserController.detail)
router.get('/user/:userId/edit', UserController.edit)
router.post('/user/:userId/edit', UserController.update)

module.exports = router