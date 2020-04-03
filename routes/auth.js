const router = require('express').Router();
const Signup = require('../Models/Signup');
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const { signupValidation, loginValidation } = require('../validation');

dotenv.config()

//signup

router.post('/signup', async (req, res) => {
  //validating the data of the user
  const { error } = signupValidation(req.body);
  if (error) {
    return res.send(error.details[0].message);
  }

  //checking if user already exists
  const emailExist = await Signup.findOne({ where: { email: req.body.email } });
  console.log(emailExist);
  if (emailExist) {
    res.send('email already exists');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //storing values of new user
  try {
    const { body } = req;
    let user = await Signup.create({
      name: body.name,
      mobile: body.mobile,
      email: body.email,
      password: hashedPassword
    });
    console.log('user', user);
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

//Login

router.post('/login', async (req, res) => {
  //validating the data of the user
  const { error } = loginValidation(req.body);
  if (error) {
    return res.send(error.details[0].message);
  }

  // check if email exists
  const user = await Signup.findOne({ where: { email: req.body.email } });
  if (!user) {
    return res.send('Email is wrong');
  }

  //check if password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if(!validPass) {
      return res.send('Invalid password')
  }

  //create and assign a token
  const token = jwt.sign({id: user.id}, process.env.TOKEN_SECRET)
  res.header('auth-token', token).send(token);
});

module.exports = router;
