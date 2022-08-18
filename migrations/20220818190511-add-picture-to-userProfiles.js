'use strict';

module.exports = {
  up (queryInterface, Sequelize) {
     return queryInterface.addColumn('UserProfiles', 'profilePicture', Sequelize.STRING)
  },

  down (queryInterface, Sequelize) {

     return queryInterface.removeColumn('UserProfiles', 'profilePicture')
  }
};
