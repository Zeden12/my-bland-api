import mongoose from "mongoose"
const schema = mongoose.Schema({
    id: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "Blog"
    },
    username: String,
    comment: String,
})

module.exports = mongoose.model("Comments", schema)