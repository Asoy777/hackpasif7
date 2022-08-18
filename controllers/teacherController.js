const {Course, Category} = require('../models')

class TeacherController {
  static courseEdit(req, res) {
    let userId = req.session.userId
    const courseId = +req.params.courseId
    let categoryList
    Category.findAll()
      .then(categories => {
        categoryList = categories
        return Course.findByPk(courseId, {include: Category})
      })
      .then(course => {
        res.render('user/teacher/course-edit', {course, categoryList, userId})
      })
      .catch(err => {
        res.send(err)
      })
  }

  static courseUpdate(req, res) {
    const courseId = +req.params.courseId
    const {name, description, duration, CategoryId} = req.body
    Course.update(
      {name, description, duration, CategoryId},
      {where: {id: courseId}}
      )
      .then(()=>{
        res.redirect('/user/course')
      })
      .catch(err => {
        res.send(err)
      })
  }

}

module.exports = TeacherController