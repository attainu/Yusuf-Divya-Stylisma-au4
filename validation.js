const Joi = require('@hapi/joi');

//signup validation
const signupValidation = data => {
  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .required()
      .max(10),
    mobile: Joi.string()
      .min(10)
      .max(10)
      .required(),
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .required()
      .min(6)
  });
  return schema.validate(data);
};

const loginValidation = data => {
  const schema = Joi.object({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .required()
      .min(6)
  });
  return schema.validate(data);
};

module.exports.signupValidation = signupValidation;
module.exports.loginValidation = loginValidation;
