const express = require('express');
const app = express();
const articles = require('./controllers/routes/articles');


// middleware

app.use(express.json());


// routes

app.use('/api/v1/articles', articles);


app.get('/hello', (req, res, next) => {
    res.send('Task Manager and App');
})

const port = 4000;

app.listen(port, console.log(`Server is listening on port ${port}...`));




