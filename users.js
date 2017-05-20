const db = require('sqlite');
const DB = {}

DB.createNewUser = (username, password, firstName, lastName) => {
	return db.run("INSERT INTO users (username, password, first_name, last_name) values (?, ?, ?, ?)", [username, password, firstName, lastName])
		.then(() => {
			return db.all("SELECT * FROM users")
		})
};

DB.findUserByUserID = (user_id) =>{
	return db.all("SELECT * FROM users WHERE user_id = ? ", [user_id])
};

DB.returnAllUsers = () =>{
	return db.all("SELECT * FROM users")
}

module.exports = DB