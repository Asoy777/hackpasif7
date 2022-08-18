const {User} = require('../models')
const bcrypt = require('bcryptjs')

class Controller {
    static home(req, res){
        let userId = ''
        if(req.session.userId) userId = req.session.userId
        res.render('home', {userId})
    }
    
    static add(req, res) {
        res.render('register-form')
    }
    
    static create(req, res) {
        const {email, password} = req.body
        const role = 'student'
        User.create({email, password, role})
            .then(user => res.redirect(`/login?success=${user.email}`))
            .catch(err => res.send(err))
    }
    
    static loginForm(req, res) {
        let errors
        let success
        if(req.query.err) errors = req.query.err.split(',')
        if(req.query.success) success = req.query.success.split(',')
        res.render('login-form', {errors, success})
    }
    
    static postLogin(req, res) {
        const {email, password} = req.body
        User.findOne({where: {email}})
            .then(user => {
                if(!user) {
                    const error = 'invalid username'
                    res.redirect(`/login?err=${error}`)
                } else {
                    const isValidPassword = bcrypt.compareSync(password, user.password)
                    if(isValidPassword) {
                        req.session.userId = user.id
                        req.session.role = user.role
                        res.redirect(`/user/${user.id}`)
                    } else {
                        const error = 'invalid password'
                        res.redirect(`/login?err=${error}`)
                    }
                }
            })
            .catch(err => res.send(err))
    }

    static logout(req, res) {
        req.session.destroy(err => {
            if (err) {
              res.send(err)
            } else {
              res.redirect('/')
            }
        })
    }

}


module.exports = Controller