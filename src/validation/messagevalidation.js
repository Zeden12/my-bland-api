import Joi from "joi";
const messageValidation = Joi.object({
    username: Joi.string().min(5).required(),
    email: Joi.string().required(),
    idea: Joi.string().min(20).required()
})

export default messageValidation