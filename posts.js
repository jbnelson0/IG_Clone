const db = require('sqlite');
const posts = {}

posts.createNewPost = (id, pic) => {
	return db.run("INSERT INTO posts (id, post) values (?, ?)", [id, post])
		.then(() => {
			return db.all("SELECT * FROM users")
		})
};

posts.findPostsByID = (user_id) =>{
	return db.all("SELECT * FROM posts WHERE id = ? ", [user_id])
};

