const express = require('express');
const router = express.Router();

const users = require('./users');

const parser = require('body-parser');
router.use(parser.json());

router.post('/createNewUser', (req, res, next) => {
	users.createNewUser("John", "Smith" , "jsmith1", "abs123")
        .then((data) => {
            res.header('Content-Type', 'application/json');
            res.send(data);
        })
        .catch((e) => {
            res.status(401);
        });
});


module.exports = router;
