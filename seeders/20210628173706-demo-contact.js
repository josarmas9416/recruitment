'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Contacts', [{
      active: true,
      city: 'Quito',
      country: 'Ecuador',
      lastname: 'Mora',
      addres: 'El recreo',
      email: 'darwin@hotmail.com',
      photo: 'path-image',
      contract: 'path-file',
      state: 'Pinchicha',
      salary: 5000
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Contacts', null, {});
  }
};
