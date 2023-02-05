const blogValidation = require("../validation/blogvalidation");
const blogVal = async(req, res,next)=>{
    const {error, value} =  blogValidation.validate(req.body, {abortEarly : false});
    if(error){
        return res.status(400).json(error.details[0].message)
    }
    // req.valData = value;
    next();
}

module.exports = blogVal