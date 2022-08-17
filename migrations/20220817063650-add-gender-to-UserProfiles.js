'use strict';

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.addColumn('UserProfiles', 'gender', Sequelize.STRING)
  },

  down (queryInterface, Sequelize) {
     return queryInterface.removeColumn('UserProfiles', 'gender')
  }
};
