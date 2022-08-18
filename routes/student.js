"use strict"

const express = require('express')
const CourseController = require('../controllers/courseController')
const student = express.Router()

student.get('/course', CourseController.list)
student.get('/course/:courseId', CourseController.detail)

module.exports = student