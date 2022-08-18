const {Course, Category} = require('../models')

class CourseController {
  static list(req, res) {
    Course.findAll({include: Category})
      .then(courses => {
        res.send(courses)
      })
      .catch(err => {
        res.send(err)
      })
  }

  static detail(req, res) {
    const courseId = +req.params.courseId
    Course.findByPk(courseId, {include: Category})
      .then(course => {
        res.send(course)
      })
      .catch(err)
  }

  static add(req, res) {
    res.send('masuk ke form add')
  }

  static create(req, res) {
    const {name, description, duration, CategoryId} = req.body
    Course.create({name, description, duration, CategoryId})
      .then(()=>{
        res.send('ok, sudah di create')
      })
      .catch(err => {
        res.send(err)
      })
  }

  static edit(req, res) {
    const courseId = +req.params.courseId
    Course.findByPk(courseId, {include: Category})
      .then(course => {
        res.send(course)
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
        res.send(`udah diupdate course dengan id ${courseId}`)
      })
      .catch(err => {
        res.send(err)
      })
  }

  static delete(req, res) {
    const courseId = +req.params.courseId
    Course.destroy({where: {id: courseId}})
      .then(() => {
        res.send(`udah didelete course dengan id ${courseId}`)
      })
      .catch(err => {
        res.send(err)
      })
  }
}

module.exports = CourseController