'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      login: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      winrate: {
        type: Sequelize.INTEGER
      },
			games_played: {
				type: Sequelize.INTEGER
			},
			ships_destroyed: {
				type: Sequelize.INTEGER
			},
			x4_cage: {
				type: Sequelize.INTEGER
			},
			x3_cage: {
				type: Sequelize.INTEGER
			},
			x2_cage: {
				type: Sequelize.INTEGER
			},
			x1_cage: {
				type: Sequelize.INTEGER
			},
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};