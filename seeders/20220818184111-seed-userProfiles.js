'use strict';
const fs = require('fs')
module.exports = {
  up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let userProfile = JSON.parse(fs.readFileSync('./data/userProfile.json','utf-8'))
     userProfile = userProfile.map((el) => {
      return {...el, createdAt:new Date(), updatedAt: new Date()}
     })
     return queryInterface.bulkInsert('userProfiles', userProfile)
  },

  down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('userProfiles', null)
  }
};
