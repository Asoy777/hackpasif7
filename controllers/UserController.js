const {User, UserProfile} = require('../models')

class UserController {

  static detail(req, res) {
    let userId = req.session.userId
    let userRole = req.session.role
    User.findByPk(userId, {include: UserProfile})
      .then(user => {
        res.render('user/user-dashboard', {user, userId, userRole})
      })
      .catch(err => {
        res.send(err)
      })
  }

  static edit(req, res) {
    const userId = +req.params.userId
    UserProfile.findByPk(userId)
      .then(userProfile =>{
        res.render('user/user-edit', {userProfile})
      })
      .catch(err => {
        res.send(err)
      })
  }

  static update(req, res) {
    const userId = +req.params.userId
    const {name, age, gender, phoneNumber, profilePicture} = req.body

    UserProfile.update({name, age, gender, phoneNumber, profilePicture}, { where: {id: userId} })
      .then(() => {
        res.redirect(`/user/${userId}`)
      })
      .catch(err => {
        res.send(err)
      })
  }

}

module.exports = UserController