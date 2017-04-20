const db = require('sqlite');
const DB_NAME = './database.sqlite';
const DB = {}

DB.createNewUser = (username, password) => {
	return db.run("INSERT INTO users (username, password) values (?, ?)", [username, password])
};

DB.findUserByUserID = (user_id) =>{
	return db.all("SELECT * FROM users WHERE id = ? ", [user_id])
};

DB.selectAllUsers = () => {
	return db.all("SELECT * FROM users")
};

Promise.resolve()
    .then(() => db.open(DB_NAME, { Promise }))
    .catch(err => console.error(err.stack))

module.exports = DB