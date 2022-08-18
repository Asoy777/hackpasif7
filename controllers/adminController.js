const {Category, Course} = require('../models')

class AdminController {
  static categoryList(req, res) {
    let userRole = req.session.role
    let userId = req.session.userId
    Category.findAll()
      .then(categories => {
        res.render('user/admin/category-list', {categories, userRole, userId})
      })
  }

  static categoryAdd(req, res) {
    let userRole = req.session.role
    let userId = req.session.userId
    let errors = ''
    if(req.query.err) errors = req.query.err.split(',')
    res.render('user/admin/category-add', {userRole, userId, errors})
  }

  static categoryCreate(req, res) {
    const name = req.body.name
    Category.create({name})
      .then(() => {
        res.redirect('/user/admin/category')
      })
      .catch(err => {
        if(err.name === 'SequelizeValidationError') {
          const errors = err.errors.map(el => el.message)
          res.redirect(`/user/admin/course/add?err=${errors}`)
        } else {
          res.send(err)
        }
      })
  }

  static courseAdd(req, res) {
    let userRole = req.session.role
    let userId = req.session.userId
    let errors = ''
    if(req.query.err) errors = req.query.err.split(',')
    Category.findAll()
      .then(categories => {
        res.render('user/admin/course-add', {categories, userRole, userId, errors})
      })
      .catch(err => {
        res.send(err)
      })
  }

  static courseCreate(req, res) {
    const {name, description, duration, CategoryId, startDate, type} = req.body
    Course.create({name, description, duration, CategoryId, startDate, type})
      .then(()=>{
        res.redirect('/user/course')
      })
      .catch(err => {
        if(err.name === 'SequelizeValidationError') {
          const errors = err.errors.map(el => el.message)
          res.redirect(`/user/admin/course/add?err=${errors}`)
        } else {
          res.send(err)
        }
      })
  }

  
  static CourseDelete(req, res) {
    const courseId = +req.params.courseId
    Course.destroy({where: {id: courseId}})
      .then(() => {
        res.redirect('/user/course')
      })
      .catch(err => {
        res.send(err)
      })
  }
}

module.exports = AdminController