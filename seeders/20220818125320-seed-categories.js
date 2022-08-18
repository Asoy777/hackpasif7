'use strict';
const fs = require('fs')

module.exports = {
  up (queryInterface, Sequelize) {
     let categories = JSON.parse(fs.readFileSync('./data/categories.json','utf-8'))
     categories = categories.map((el) => {
      return {...el, createdAt:new Date(), updatedAt: new Date()}
     })

     return queryInterface.bulkInsert('Categories', categories)
  },

  down (queryInterface, Sequelize) {

     return queryInterface.bulkDelete('Categories', null)
  }
};
