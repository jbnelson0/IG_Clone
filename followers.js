// DB followers table functions

const db = require('sqlite');
const DB = {}

// DB.returnFollowers = () =>{
// 	return db.all("SELECT post FROM followersFeed")
// }

DB.returnFollowersByID = (userID) => {
	return db.all("SELECT * FROM followers WHERE userID = ?", [userID])
}

DB.addNewFollower = (userID, followerID, followerPost, followerUN) => {
	return db.run("INSERT INTO followers (userID, followerID, followerPost, followerUN) VALUES (?, ?, ?, ?)", [userID, followerID, followerPost, followerUN])
	.then(() => {
		return db.all("SELECT * FROM followers")
	})
}

module.exports = DB