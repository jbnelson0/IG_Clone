const db = require('sqlite');
const DB = {}

DB.createNewUser = (username, password) => {
	return db.run("INSERT INTO users (username, password) values (?, ?)", [username, password])
		.then(() => {
			return db.all("SELECT * FROM users")
		})
};

DB.findUserByUserID = (user_id) =>{
	return db.all("SELECT * FROM users WHERE id = ? ", [user_id])
};

module.exports = DB