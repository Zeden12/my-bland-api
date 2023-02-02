import Joi from "joi";
const userValidation = Joi.object({
    username: Joi.string().min(5).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(10).required(),
    role: Joi.string()
})

export default userValidation