const mongoose = require('mongoose');
// const Schema = mongoose.Schema();
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email:{
        type: String,
        requireL: true
    },
    password:{
        type: String,
        require: true,
        hidden: Boolean
    },

    date: { type: Date, default: Date.now }

})
const Users = mongoose.model('Users',UserSchema);
module.exports = Users;