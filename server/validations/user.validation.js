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


module.exports = {
  createUser,
  loginUser
};