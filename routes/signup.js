const Users = require('../Models/Users');
const bcrypt = require("bcryptjs");

module.exports = (app) => {
  app.post('/signup', (req, res) => {
    // eslint-disable-next-line no-unused-vars
    const data = {
      name: req.body.name,
      mobile: req.body.mobile,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    };

    try {
      Users.findOne({
        where: {
          username: data.username,
        },
      }).then((user) => {
        if (user != null) {
          console.log('username already taken');
          return res.send({
            message: 'username already taken',
          });
        }
        bcrypt.hash(data.password, 10).then((hashedPassword) => {
          Users.create({
            username:data.username,
            password: hashedPassword,
            email: data.email,
            mobile:data.mobile,
            name:data.name

          }).then((user) => {
            console.log('user created');
            return res.send({
              message:"user created",
              user:user
            })
          });
        });
      });
    } catch (err) {
      return done(err);
    }
  });
};
