// DB followers table functions

const db = require('sqlite');
const DB = {}

DB.returnFollowersByID = (userID) => {
	return db.all("SELECT * FROM followers WHERE userID = ?", [userID])
}

DB.addNewFollower = (userID, followerID, followerPost, followerUN) => {
	return db.run("INSERT INTO followers (userID, followerID, followerPost, followerUN) VALUES (?, ?, ?, ?)", [userID, followerID, followerPost, followerUN])
	.then(() => {
		return db.all("SELECT * FROM followers")
	})
}

DB.deleteFollower = (id, userID) => {
	return db.run("DELETE FROM followers WHERE id = ?", [id])
	.then(() => {
		return db.all("SELECT * FROM followers WHERE userID = ?", [userID])
	})
}

module.exports = DB