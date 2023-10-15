const Joi = require('joi');
const { password, objectId } = require('./custom');

const createUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
  }),
};
const loginUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password)
  }),
};

const ContactDetails  = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    message:Joi.string().required().min(5)
  }),
};


module.exports = {
  createUser,
  loginUser,
  ContactDetails
};