const express = require('express');
const db = require('sqlite');

let app = express();
const port = 8008;

const parser = require('body-parser');
app.use(parser.json())

app.use('/', express.static('./public/', {
    'index': ['index.html']
}));

Promise.resolve()
    .then(() => db.open('./database.sqlite', { Promise }))
    // .then(() => db.migrate({ force: 'last' }))
    .then(() => app.listen(port))
    .then(() => {
        console.log(`Server started on port ${port}`)
     })
    .catch(err => console.error(err.stack))