'use strict';

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.addColumn('Courses', 'startDate', Sequelize.DATE)
  },

  down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Courses', 'startDate')
  }
};
