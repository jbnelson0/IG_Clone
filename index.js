const express = require('express');
const db = require('sqlite')

const authRoutes = require('./authRoutes.js');

let app = express();
const port = 8008;

const parser = require('body-parser');
app.use(parser.json())

app.use('/', express.static('./public/', {
    'index': ['index.html']
}));

app.use(authRoutes(db));


app.get('/api/users', (request, response) => {
	console.log('here now -----')
	return db.all(`SELECT * FROM users`)
		.then((data) => {
			console.log(data)
			response.send(data);
		})
		.catch((e) => {
			console.log(e);
			response.status(403);
			response.send({error: e})
		})
})

Promise.resolve()
    .then(() => db.open('./database.sqlite', { Promise }))
    .then(() => db.migrate({ force: 'last' }))
    .then(() => app.listen(port))
    .then(() => {
        console.log(`Server started on port ${port}`)
     })
    .catch(err => console.error(err.stack))