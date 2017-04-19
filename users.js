
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

const db = require('sqlite');

const DB = {}

DB.createNewUser = (first_name, last_name, username, password) => {
	return db.run("INSERT INTO users (first_name, last_name, username, password) values (?, ?, ?, ?)", [first_name, last_name, username, password])
}

DB.findUserByUserID = (user_id) =>{
	return db.all("SELECT * FROM users WHERE id = ? ", [user_id])
}

DB.selectAllUsers = (table_name) => {
	return db.all("SELECT * FROM" + table_name)
}

module.exports = DB

