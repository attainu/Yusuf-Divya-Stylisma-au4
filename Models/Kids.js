const db = require("../db");
const Sequelize = require("sequelize");

let Kids = db.define(
  "kids",
  {
    categories: {
      type: Sequelize.STRING, 
      allowNull:false
    },
    section: {
      type: Sequelize.DECIMAL,
      allowNull: false
    },
    size: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    productcolor: {
      type: Sequelize.STRING
    },
    productimage: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    productname: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    productprice: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    productquantity: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    productrating: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    itemquantity: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
    freezeTableName:true
  }
);

db.sync().then(res => {
  console.log("Stylisma db has been created");
});

module.exports = Kids;