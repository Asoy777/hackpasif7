'use strict';

module.exports = {
 up (queryInterface, Sequelize) {
     return queryInterface.addColumn('Courses', 'type', Sequelize.STRING)
  },

 down (queryInterface, Sequelize) {
     return queryInterface.removeColumn('Courses', 'type') 
  }
};
