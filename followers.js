// DB followers table functions

const db = require('sqlite');
const DB = {}

DB.returnFollowers = () =>{
	return db.all("SELECT post FROM followersFeed")
}

DB.returnFollowersByID = (userID) => {
	return db.all("SELECT * FROM followersFeed WHERE userID = ?", [userID])
}

DB.addNewFollower = (userID, followerID) => {
	return db.run("INSERT INTO followers (userID, followerID) VALUES (?, ?)", [userID, followerID])
	.then(()=>{
		return db.all("SELECT * FROM posts WHERE id = ?", [followerID])
	})
}

module.exports = DB