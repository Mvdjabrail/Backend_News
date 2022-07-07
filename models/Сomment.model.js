const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    text: String,
    news: {
        ref: 'News',
        type: mongoose.SchemaTypes.ObjectId
    },
    user: {
        ref: "User",
        type: mongoose.SchemaTypes.ObjectId
    }
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment