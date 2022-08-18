const { Op } = require('sequelize')
const {Course, Category} = require('../models')

class CourseController {
  static list(req, res) {
    let option = req.query
    let categoryList
    if(option.search) option = {include: Category, where : {name:{[Op.iLike]: `%${option.search}%`}}}
    else if(option.filter) option = {include: Category, where : {CategoryId:{[Op.eq]: option.filter}}}
    else option = {include: Category}

    Category.findAll()
      .then(categories => {
        categoryList = categories
        return Course.findAll(option)
      })
      .then(courses => {
        res.render('course-list', {courses, categoryList})
      })
      .catch(err => {
        res.send(err)
      })
  }

  static detail(req, res) {
    const courseId = +req.params.courseId
    Course.findByPk(courseId, {include: Category})
      .then(course => {
        res.render('course-detail', {course})
      })
      .catch(err => {
        res.send(err)
      })
  }

  static add(req, res) {
    Category.findAll()
      .then(categories => {
        res.render('course-add', {categories})
      })
      .catch(err => {
        res.send(err)
      })
  }

  static create(req, res) {
    const {name, description, duration, CategoryId} = req.body
    Course.create({name, description, duration, CategoryId})
      .then(()=>{
        res.redirect('/course')
      })
      .catch(err => {
        res.send(err)
      })
  }

  static edit(req, res) {
    const courseId = +req.params.courseId
    let categoryList
    Category.findAll()
      .then(categories => {
        categoryList = categories
        return Course.findByPk(courseId, {include: Category})
      })
      .then(course => {
        res.render('course-edit', {course, categoryList})
      })
      .catch(err => {
        res.send(err)
      })
  }

  static update(req, res) {
    const courseId = +req.params.courseId
    const {name, description, duration, CategoryId} = req.body
    Course.update(
      {name, description, duration, CategoryId},
      {where: {id: courseId}}
      )
      .then(()=>{
        res.redirect('/course')
      })
      .catch(err => {
        res.send(err)
      })
  }

  static delete(req, res) {
    const courseId = +req.params.courseId
    Course.destroy({where: {id: courseId}})
      .then(() => {
        res.redirect('/course')
      })
      .catch(err => {
        res.send(err)
      })
  }
}

module.exports = CourseController