const SQL = require('sqlite');

const db = require('./database.sqlite')

    db.all('SELECT * FROM users')
        .then((data) => {
            res.header('Content-Type', 'application/json');
            res.send({ users: data });
        })
        .catch((e) => {
            res.status(401);
        });