const db = require('sqlite');
const posts = {}

posts.createNewPost = (id, post) => {
	return db.run("INSERT INTO posts (id, post) values (?, ?)", [id, post])
		.then(() => {
			return db.all("SELECT * FROM posts")
		})
};

posts.findPostsByID = (user_id) =>{
	return db.all("SELECT * FROM posts WHERE id = ? ", [user_id])
};

posts.returnAllPosts = () => {
	return db.all("select * FROM posts")
};

posts.returnUserFeed = (user_id) => {
	return db.all("SELECT * FROM feed WHERE user_id = ? ", [user_id])
};

posts.returnMainFeed = () => {
	return db.all("SELECT * FROM feed")
};

module.exports = posts