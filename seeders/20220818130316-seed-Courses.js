'use strict';
const fs = require('fs')

module.exports = {
  up (queryInterface, Sequelize) {

     let courses = JSON.parse(fs.readFileSync('./data/courses.json','utf-8'))
     courses = courses.map((el) => {
      return {...el, createdAt:new Date(), updatedAt: new Date()}
     })
     
     return queryInterface.bulkInsert('Courses', courses)
  },

  down (queryInterface, Sequelize) {

     return queryInterface.bulkDelete('Courses', null)
  }
};
