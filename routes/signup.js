const passport = require("passport")
const Users = require('../Models/Users');

module.exports = app => {
    app.post('/signup', (req, res, next) => {
      passport.authenticate('register', (err, user, info) => {
        if (err) {
          console.error(err);
        }
        if (info !== undefined) {
          console.error(info.message);
          res.status(403).send(info.message);
        } else {
          // eslint-disable-next-line no-unused-vars
          req.logIn(user, error => {
            console.log(req.body,'req');
            const data = {
              name: req.body.name,
              mobile: req.body.mobile,
              email: req.body.email,
              username: user.username,
            };
            console.log(data);
            Users.findOne({
              where: {
                username: data.username,
              },
            }).then(user => {
              console.log(user);
              user
                .update({
                  name: data.name,
                  mobile: data.mobile,
                })
                .then(() => {
                  console.log('user created in db');
                  res.status(200).send({ message: 'user created' });
                });
            });
          });
        }
      })(req, res, next);
    });
  };