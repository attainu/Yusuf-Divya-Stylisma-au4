const db = require("../db");
const Sequelize = require("sequelize");

let Signup = db.define(
  "signup",
  {
    name: {
      type: Sequelize.STRING, 
      allowNull:false
    },
    mobile: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    }
  },
  {
    timestamps: false,
    freezeTableName:true
  }
);

db.sync().then(res => {
  console.log("Stylisma db has been created");
});

module.exports = Signup;