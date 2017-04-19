const db = require('sqlite');

const DB = {}

DB.createNewUser = (data) => {
	return db.run("INSERT INTO users (user_id, first_name, last_name, email) values (?, ?, ?, ?)", [data])

}

DB.findUserByUserID = (user_id) =>{
	return db.run("SELECT * FROM users WHERE id = ? ", [user_id])
}

