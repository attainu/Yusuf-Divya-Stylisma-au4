const db = require('../db');
const Sequelize = require('sequelize');

let CurrentOrders = db.define(
  'currentorders',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    categories: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    section: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    size: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    productcolor: {
      type: Sequelize.STRING,
    },
    productimage: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    productname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    productprice: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    productquantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    productrating: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    itemquantity: {
      type: Sequelize.INTEGER,
    },
    userid: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

db.sync().then((res) => {
  console.log('current orders table has created');
});

module.exports = CurrentOrders;
