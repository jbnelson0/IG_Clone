const express = require('express');
const db = require('sqlite');

let app = express();
const port = 8008;

const parser = require('body-parser');
app.use(parser.json())

app.use('/', express.static('./public/', {
    'index': ['index.html']
}));

app.get('/get', (req, res, next) => {
    console.log("here")
    res.header('Content-Type', 'application/json');
	res.send({
        "message": "GET request to the homepage",
        "success": true
    })
})

app.post('/post', (req, res, next) => {
    console.log("here")
    console.log(req.body)
    res.header('Content-Type', 'application/json');
    res.send({
        "message": "POST request to the homepage",
        "success": true
    })
})

app.delete('/delete', (req, res, next) => {
    res.header('Content-Type', 'application/json');
    res.send({
        "message": "DELETE request to the homepage",
        "success": true
    });
});

Promise.resolve()
    .then(() => db.open('./database.sqlite', { Promise }))
    .then(() => db.migrate({ force: 'last' }))
    .then(() => app.listen(port))
    .then(() => {
        console.log(`Server started on port ${port}`)
     })
    .catch(err => console.error(err.stack))