const db = require("../db");
const Sequelize = require("sequelize");

let Women = db.define(
  "women",
  {
    categories: {
      type: Sequelize.STRING, 
      allowNull:false
    },
    section: {
      type: Sequelize.STRING,
      allowNull: false
    },
    size: {
      type: Sequelize.STRING,
      allowNull: false
    },
    productcolor: {
      type: Sequelize.STRING
    },
    productimage: {
      type: Sequelize.STRING,
      allowNull: false
    },
    productname: {
      type: Sequelize.STRING,
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

module.exports = Women;