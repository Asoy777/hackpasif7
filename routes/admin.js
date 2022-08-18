"use strict"

const express = require('express')
const AdminController = require('../controllers/adminController')
const admin = express.Router()

admin.use((req, res, next) => {
  if(req.session.role != 'admin') {
    const error = `You dont have access`
    res.redirect(`/login?err=${error}`)
  }
  next()
})

admin.get('/category', AdminController.categoryList)
admin.get('/course/add', AdminController.courseAdd)
admin.post('/course/add', AdminController.courseCreate)
admin.get('/category/add', AdminController.categoryAdd)
admin.post('/category/add', AdminController.categoryCreate)
admin.get('/course/:courseId/delete', AdminController.CourseDelete)

module.exports = admin