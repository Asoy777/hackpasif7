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
   let users = JSON.parse(fs.readFileSync('./data/users.json','utf-8'))
   users = users.map((el) => {
    return {...el, createdAt:new Date(), updatedAt: new Date()}
   })
   return queryInterface.bulkInsert('Users', users)
  },

  down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null)
  }
};
