const {User, UserProfile} = require('../models')
const bcrypt = require('bcryptjs')

class UserController {

  static add(req, res) {
    res.render('auth-pages/register-form')
  }

  static create(req, res) {
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
        if(!user) {
          const error = 'invalid username'
          res.redirect(`/user/login?err=${error}`)
        } else {
          const isValidPassword = bcrypt.compareSync(password, user.password)
          if(isValidPassword) {
            res.redirect('/')
          } else {
            const error = 'invalid password'
            res.redirect(`/user/login?err=${error}`)
          }
        }
      })
      .catch(err => res.send(err))
  }

  static detail(req, res) {
    const userId = +req.params.userId
    User.findByPk(userId, {include: UserProfile})
      .then(user => {
        res.send(user)
      })
      .catch(err => {
        res.send(err)
      })
  }

  static edit(req, res) {
    const userId = +req.params.userId
    UserProfile.findByPk(userId)
      .then(user =>{
        res.send(user)
      })
      .catch(err => {
        res.send(err)
      })
  }

  static update(req, res) {
    const {name, age, phoneNumber, UserId} = req.body
    UserProfile.update({name, age, phoneNumber, UserId})
      .then(() => {
        res.send('profile sudah diupdate')
      })
      .catch(err => {
        res.send(err)
      })
  }

}

module.exports = UserController