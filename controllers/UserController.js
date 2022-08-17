const {User} = require('../models')
const bcrypt = require('bcryptjs')

class UserController {

  static registerForm(req, res) {
    res.render('auth-pages/register-form')
  }

  static postRegister(req, res) {
    const {email, password} = req.body
    const role = 'student'
    User.create({email, password, role})
      .then(user => res.redirect('/'))
      .catch(err => res.send(err))
  }

  static loginForm(req, res) {
    let errors = ''
    if(req.query.err) errors = req.query.err.split(',')
    res.render('auth-pages/login-form', {errors})
  }

  static postLogin(req, res) {
    const {email, password} = req.body
    console.log(email, password)
    User.findOne({where: {email}})
      .then(user => {
        const isValidPassword = bcrypt.compareSync(password, user.password)
        if(isValidPassword) {
          res.redirect('/')
        } else {
          const error = 'invalid username/password'
          res.redirect(`/auth/login?err=${error}`)
        }
      })
      .catch(err => res.send(err))
  }

}

module.exports = UserController