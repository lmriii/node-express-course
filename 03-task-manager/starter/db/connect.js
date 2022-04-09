const mongoose = require('mongoose');


const connectionString = 'mongodb+srv://admin:UVasevL7NjTpiXys@twc-backend.8go77.mongodb.net/blog-articles?retryWrites=true&w=majority';

const connectDB = (url) => {
    return mongoose
    .connect(connectionString,{ 
        useNewUrlParser: true,
        useUnifiedTopology: true})
};

module.exports = connectDB;

