const mongoose = require('mongoose')

const newsSchema = mongoose.Schema({
    text: String,
    category: {
        ref: 'Category',
        type: mongoose.SchemaTypes.ObjectId
    },
    user: {
        ref: "User",
        type: mongoose.SchemaTypes.ObjectId
    }
})

const News = mongoose.model('News', newsSchema)

module.exports = News