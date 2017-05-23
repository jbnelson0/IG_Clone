const db = require('sqlite');
const posts = {}

// create new post
posts.createNewPost = (id, username, post) => {
	return db.run("INSERT INTO posts (id, username, post) values (?, ?, ?)", [id, username, post])
		.then(() => {
			return db.all("SELECT * FROM posts")
		})
};

// main feed
posts.returnAllPosts = () => {
	return db.all("select * FROM posts")
};

// profile page feed
posts.returnUserFeed = (user_id) => {
	return db.all("SELECT * FROM posts WHERE id = ? ", [user_id])
};

posts.deleteItem = (rId, userID) => {
	return db.run("DELETE FROM posts WHERE rId = ?", [rId])
	.then(() => {
		return db.all("SELECT * FROM posts WHERE id = ? ", [userID])
	})
}

module.exports = posts