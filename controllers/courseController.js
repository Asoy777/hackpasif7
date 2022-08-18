const { Op } = require('sequelize')
const {Course, Category} = require('../models')
const dateFormatter = require('../helpers/dateFormatter')

class CourseController {
  static list(req, res) {
    let userRole = req.session.role
    let userId = req.session.userId
    let option = req.query
    let categoryList
    if(option.search) option = {include: Category, where : {name:{[Op.iLike]: `%${option.search}%`}}}
    else if(option.filter) option = {include: Category, where : {CategoryId:{[Op.eq]: option.filter}}}
    else option = {include: Category, order: ['startDate']}

    Category.findAll()
      .then(categories => {
        categoryList = categories
        return Course.findAll(option)
      })
      .then(courses => {
        res.render('user/course-list', {courses, categoryList, userRole, userId, dateFormatter})
      })
      .catch(err => {
        res.send(err)
      })
  }

  static detail(req, res) {
    const courseId = +req.params.courseId
    Course.findByPk(courseId, {include: Category})
      .then(course => {
        res.render('/user/course-detail', {course})
      })
      .catch(err => {
        res.send(err)
      })
  }

}

module.exports = CourseController