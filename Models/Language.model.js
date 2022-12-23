const mongoose = require('mongoose')

const languageSchema = mongoose.Schema({
    name: String,    
    yearOfCreation: Number,
    logo: String
})

const Language = mongoose.model('language', languageSchema)

module.exports = Language