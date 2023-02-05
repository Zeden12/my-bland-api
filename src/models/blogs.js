const mongoose = require('mongoose');
// const Schema = mongoose.Schema();
const BlogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image:{
        public_id:{
            type: String,
            required: true
        },
        url:{
            type: String,
            required: true
        }
    },
    highlight:{
        type: String,
        required: true
    },

    body:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },

    comments: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    }],

    date: { type: Date, default: Date.now }
})
const Blogs = mongoose.model('Blogs',BlogSchema);
module.exports = Blogs;