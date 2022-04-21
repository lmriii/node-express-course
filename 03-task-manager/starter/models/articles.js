const mongoose = require('mongoose');


const ArticleSchema = new mongoose.Schema({
    title : {
        type: String,
        required: [true, 'must provide a title'],
        trim: true,
        maxlength: [30, 'title must be 30 characters or less']
    },
    published: {
        type: Boolean,
        default: false
    }
}); 

module.exports = mongoose.model('Article', ArticleSchema)