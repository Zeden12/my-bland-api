const joi = require('joi');
const messageValidation = joi.object({
    username: joi.string().min(5).required(),
    email: joi.string().required(),
    idea: joi.string().min(2).required()
})

module.exports = messageValidation