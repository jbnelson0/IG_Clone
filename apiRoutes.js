const express = require('express');
const App = express()
const db = require('sqlite')

const users = require('./users.js')
const posts = require('./posts.js')

App.get('/users', (request, response) => {
	console.log('here now -----')
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

App.get('/:id/users', (request, response) => {
	console.log('here now -----')
	return users.findUserByUserID(request.params.id)
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

App.get('/:id/posts', (request, response) => {
	console.log('in api/:id/posts')
	return posts.findPostsByID(request.params.id)
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

module.exports = App