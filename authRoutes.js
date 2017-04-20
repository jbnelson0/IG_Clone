const express = require('express');
const router = express.Router();

const Users = require('./users');

const parser = require('body-parser');
router.use(parser.json());

router.post('/createNewUser', (req, res, next) => {
	Users.createNewUser(req.body.username, req.body.password)
	    .then((data) => {
	    	res.header('Content-Type', 'application/json');
	        res.send({ data });
	    })
	    .catch((e) => {
	        res.status(401);
	    });
});

module.exports = router;
