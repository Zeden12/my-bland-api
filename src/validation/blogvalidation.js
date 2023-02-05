import Joi from "joi";
const blogValidation = Joi.object({
    title: Joi.string().min(7).required(),
    image: Joi.string().required(),
    highlight: Joi.string().min(5).required(),
    body: Joi.string().min(20).required(),
    author: Joi.string().min(5).required()
})

export default blogValidation