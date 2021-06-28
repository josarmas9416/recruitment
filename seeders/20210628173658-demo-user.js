'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Users', [{
        username: 'maria',
        password: '2asdasdasdasdqe2qwas',
        email:  'maria@espe.edu.ec',
        active: true
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
 
    await queryInterface.bulkDelete('Users', null, {});
     
  }
};
