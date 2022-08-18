'use strict';

module.exports = {
  up (queryInterface, Sequelize) {
     return queryInterface.addColumn('Courses', 'picture', Sequelize.STRING)
  },

  down (queryInterface, Sequelize) {
     return queryInterface.removeColumn('Courses', 'picture')
  }
};
