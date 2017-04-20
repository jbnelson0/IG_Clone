const SQL = require('sqlite');

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