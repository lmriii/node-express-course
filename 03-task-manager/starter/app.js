

const express = require('express');
const app = express();
const articles = require('./controllers/routes/articles');
const connectDB = require('./db/connect');


// middleware

app.use(express.json());


// routes

app.use('/api/v1/articles', articles);


app.get('/hello', (req, res, next) => {
    res.send('Task Manager and App');
})

const port = 4000;

const start = async () => {
    try {
        await connectDB()
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        
    }
}


start();



