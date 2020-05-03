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
    userid: {
      type: sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

db.sync().then((res) => {
  console.log('Orders table has been created');
});

module.exports = Order;
