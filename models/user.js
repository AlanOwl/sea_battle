'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
		
		
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    winrate: DataTypes.INTEGER,
		ships_destroyed: DataTypes.INTEGER,
		games_played: DataTypes.INTEGER,
		x4_cage: DataTypes.INTEGER,
		x3_cage: DataTypes.INTEGER,
		x2_cage: DataTypes.INTEGER,
		x1_cage: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users',
		timestamps: false,

  });
  return Users;
};