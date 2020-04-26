const db = require('../db');
const Sequelize = require('sequelize');

let Users = db.define(
  'users',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    mobile: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
   
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Users;
