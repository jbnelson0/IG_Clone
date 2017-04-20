
const SQL = require('sqlite');

const DB = {}

DB.createNewUser = (first_name, last_name, username, password) => {
<<<<<<< HEAD
    return db.run("INSERT INTO users (first_name, last_name, username, password) values (?, ?, ?, ?)", [first_name, last_name, username, password])
}

DB.findUserByUserID = (user_id) =>{
    return db.all("SELECT * FROM users WHERE id = ? ", [user_id])
}

DB.selectAllUsers = (table_name) => {
    return db.all("SELECT * FROM" + table_name)
}

module.exports = DB
=======
	return db.run("INSERT INTO users (first_name, last_name, username, password) values (?, ?, ?, ?)", [first_name, last_name, username, password])
}

DB.findUserByUserID = (user_id) =>{
	return db.all("SELECT * FROM users WHERE id = ? ", [user_id])
}

DB.selectAllUsers = (table_name) => {
	return db.all("SELECT * FROM" + table_name)
}

module.exports = DB

>>>>>>> 5bbbdf1e4a4987ac52765a891d87a2e7565e51c5
