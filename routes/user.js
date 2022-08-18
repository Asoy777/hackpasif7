"use strict"

const express = require('express')
const CourseController = require('../controllers/courseController')
const UserController = require('../controllers/userController')
const user = express.Router()
const admin = require('./admin')
const teacher = require('./teacher')

user.get('/course', CourseController.list)
user.get('/course/:courseId', CourseController.detail)

user.get('/:userId', UserController.detail)
user.get('/:userId/edit', UserController.edit)
user.post('/:userId/edit', UserController.update)

user.use('/teacher', teacher)
user.use('/admin', admin)


module.exports = user