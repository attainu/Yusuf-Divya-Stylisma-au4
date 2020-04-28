const db = require('../db');
const sequelize = require('sequelize');

let Order = db.define(
  'orders',
  {
    items_ordered: {
      type: sequelize.STRING,
    },
    total_price: {
      type: sequelize.INTEGER,
    },
    payment_mode: {
      type: sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

db.sync().then((res) => {
  console.log('Stylisma db order table has been created');
});

module.exports = Order;
