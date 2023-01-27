import Joi from "joi";
const blogValidation = Joi.object({
    title: Joi.string().min(7).required(),
    image: Joi.string().required(),
    body: Joi.string().min(20).required()
})

export default blogValidation