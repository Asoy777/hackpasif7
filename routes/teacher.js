"use strict"

const express = require('express')
const TeacherController = require('../controllers/teacherController')
const teacher = express.Router()

teacher.use((req, res, next) => {
  if(req.session.role == 'student') {
    const error = `You dont have access`
    res.redirect(`/login?err=${error}`)
  }
  next()
})

teacher.get('/course/:courseId/edit', TeacherController.courseEdit)
teacher.post('/course/:courseId/edit', TeacherController.courseUpdate)

module.exports = teacher