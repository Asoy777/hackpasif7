'use strict';
const fs = require('fs')
module.exports = {
  up (queryInterface, Sequelize) {
   let userProfile = JSON.parse(fs.readFileSync('./data/userProfile.json','utf-8'))
     userProfile = userProfile.map((el) => {
      return {...el, createdAt:new Date(), updatedAt: new Date()}
     })
     return queryInterface.bulkInsert('UserProfiles', userProfile)
  },

  down (queryInterface, Sequelize) {
     return queryInterface.bulkDelete('UserProfiles', null)
  }
};
