const db = require("../db");
const Sequelize = require("sequelize");

let Men = db.define(
  "signup",
  {
    type: {
      type: Sequelize.STRING, 
      allowNull:false
    },
    price: {
      type: Sequelize.DECIMAL,
      allowNull: false
    },
    stock: {
      type: Sequelize.INTEGER,
      allowNull: false
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

module.exports = Men;