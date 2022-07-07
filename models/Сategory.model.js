const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    text: String,
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category