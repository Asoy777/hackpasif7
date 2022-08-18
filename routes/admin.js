"use strict"

const express = require('express')
const CourseController = require('../controllers/courseController')
const admin = express.Router()

admin.get('/course/add', CourseController.add)
admin.post('/course/add', CourseController.create)
admin.get('/course/:courseId/edit', CourseController.edit)  // done // khusus admin/teacher
admin.post('/course/:courseId/edit', CourseController.update) // done // khusus admin/teacher
admin.get('/course/:courseId/delete', CourseController.delete) // done // khusus admin

module.exports = admin