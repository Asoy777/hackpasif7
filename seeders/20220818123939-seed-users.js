'use strict';
const fs = require('fs')
const bcrypt = require('bcryptjs')

module.exports = {
  up (queryInterface, Sequelize) {
   let users = JSON.parse(fs.readFileSync('./data/users.json','utf-8'))
   users = users.map((el) => {
    el.password = bcrypt.hashSync(el.password, bcrypt.genSaltSync(8))
    return {
      ...el, 
      createdAt:new Date(), 
      updatedAt: new Date()}
   })
   
   return queryInterface.bulkInsert('Users', users)
  },

  down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users')
  }
};
