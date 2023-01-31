import Joi from "joi";
const userValidation = Joi.object({
    username: Joi.string().min(5).required(),
    email: Joi.string().required(),
    password: Joi.string().min(5).required()
})

export default userValidation