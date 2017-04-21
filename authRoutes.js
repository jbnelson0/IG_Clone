const express = require('express');

const authApp = express();

// login route
authApp.post('/login', (request, response) => {
	response.send('IN LOGIN ROUTE')
});

module.exports = authApp;