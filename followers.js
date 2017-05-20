// DB followers table functions

const db = require('sqlite');
const DB = {}

DB.returnFollowers = () =>{
	return db.all("SELECT post FROM followersFeed")
}

DB.returnFollowersByID = (userID) => {
	return db.all("SELECT * FROM followersFeed WHERE userID = ?", [userID])
}

module.exports = DB