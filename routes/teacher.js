"use strict"

const express = require('express')
const CourseController = require('../controllers/courseController')
const teacher = express.Router()


teacher.get('/course')
teacher.get('/course/:courseId/edit', CourseController.edit)  // done // khusus admin/teacher
teacher.post('/course/:courseId/edit', CourseController.update) // done // khusus admin/teacher

module.exports = teacher