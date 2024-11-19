'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {

		await queryInterface.bulkInsert('Users', [{
			login: 'Alan3',
			password: 'qwerty',
			winrate: 99,
			games_played: 1,
			ships_destroyed: 1,
			x4_cage: 1,
			x3_cage: 1,
			x2_cage: 1,
			x1_cage: 1

		}], {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Users', null, {});
	}
};
