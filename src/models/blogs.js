const mongoose = require('mongoose');
// const Schema = mongoose.Schema();
const BlogSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    image:{
        type: String,
        requireL: true
    },
    body:{
        type: String,
        require: true
    },
    author:{
        type: String,
        require: true
    },

    comments: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    }],

    date: { type: Date, default: Date.now }
})
const Blogs = mongoose.model('Blogs',BlogSchema);
module.exports = Blogs;