const Sequelize = require('sequelize');

// let { DATABASE_NAME,
//   USER_NAME,
//   PASSWORD, HOST_NAME, DIALECT } = process.env;

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const db = new Sequelize(
  'postgres://ckfzmzwdpbeudg:3c6fb60393cb411fa44a45eef6b705b035931db38ca083a77c380c0e41c254ad@ec2-3-231-46-238.compute-1.amazonaws.com:5432/d2ge3jn161nmm6',
  {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      native: true,
      ssl: true
    }
  }
);

db.sync().then(() => {
  // eslint-disable-next-line no-console
  console.log('Users db and user table have been created');
});

module.exports = db;
