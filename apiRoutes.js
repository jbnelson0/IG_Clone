const express = require('express');
const App = express()
const db = require('sqlite')

const users = require('./users')
const posts = require('./posts')
const followers = require('./followers')

// Find all users
App.get('/users', (request, response) => {
	console.log('in api/users')
	return users.returnAllUsers()
		.then((data) => {
			console.log(data)
			response.send(data);
		})
		.catch((e) => {
			console.log(e);
			response.status(403);
			response.send({error: e})
		})
});

// Find User by ID
App.get('/:id/users', (request, response) => {
	console.log('in api/:id/users')
    const id = parseInt(request.params.id, 10)
	return users.findUserByUserID(id)
		.then((data) => {
			console.log(data)
			response.send(data);
		})
		.catch((e) => {
			console.log(e);
			response.status(403);
			response.send({error: e})
		})
});

// Find all posts
App.get('/posts', (request, response) => {
	console.log('in api/posts')
	return posts.returnAllPosts()
		.then((data) => {
			console.log(data)
			response.send(data);
		})
		.catch((e) => {
			console.log(e);
			response.status(403);
			response.send({error: e})
		})
});

// find posts by a user_id
App.get('/:id/posts', (request, response) => {
	console.log('in api/:id/posts')
    const id = parseInt(request.params.id, 10)
	return posts.findPostsByID(id)
		.then((data) => {
			console.log(data)
			response.send(data);
		})
		.catch((e) => {
			console.log(e);
			response.status(403);
			response.send({error: e})
		})
});

// Load homepage by user_id
App.get('/feed/:id/users/', (request, response, next) => {
    console.log('User home page');
    const id = parseInt(request.params.id, 10);
    return posts.returnUserFeed(id)
    	.then((data) => {
			console.log(data)
			response.send(data);
		})
		.catch((e) => {
			console.log(e);
			response.status(403);
			response.send({error: e})
		})

});
// --------------------------

// loads main feed
App.get('/feed', (request, response, next) => {
    console.log('inside /feed/posts');
    return posts.returnMainFeed()
    	.then((data) => {
			console.log(data)
			response.send(data);
		})
		.catch((e) => {
			console.log(e);
			response.status(403);
			response.send({error: e})
		})
});

// create new user
App.post('/createNewUser', (req, res, next) => {
	console.log(req.body)
    return users.createNewUser(req.body.username, req.body.password, req.body.firstName, req.body.lastName)
        .then((data) => {
            console.log(data)
            res.send(JSON.stringify({
            	data,
            	success: true
            }));
        })
        .catch((e) => {
            console.log(e);
            res.status(403);
            res.send({error: e})
        })
});

// Test for Followers
App.get('/:id/main/feed', (request, response) => {
	console.log('inside follower test');
	const id = parseInt(request.params.id, 10)
    return followers.returnFollowersByID(id)
    	.then((data) => {
    		response.send(data)
    	})
		.catch((e) => {
			console.log(e);
			response.status(403);
			response.send({error: e})
		})
});

// App.get('/test', (request, response) => {
// 	console.log('inside follower test');
// 	const id = parseInt(request.params.id, 10)
//     return followers.returnFollowers()
//     	.then((data) => {
// 			console.log(data)
// 			response.send(data);
// 		})
// 		.catch((e) => {
// 			console.log(e);
// 			response.status(403);
// 			response.send({error: e})
// 		})
// });

// App.get('/:id/testing', (request, response) => {
// 	console.log('inside follower test');
// 	const id = parseInt(request.params.id, 10)
//     return followers.returnFeed(id)
//     	.then((data) => {
// 			console.log(data)
// 			response.send(data);
// 		})
// 		.catch((e) => {
// 			console.log(e);
// 			response.status(403);
// 			response.send({error: e})
// 		})
// });
module.exports = App










