const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title:{
        type: 'string',
        required: true
    },
    snippet:{
        type: 'string',
        required: true
    },
    body: {
        type: 'string',
        required: true
    }
}, {timestamps:true}); 

// model (models always start with capital latters)

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog  