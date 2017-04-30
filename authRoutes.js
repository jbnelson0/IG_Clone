const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const Users = require('./users');
const parser = require('body-parser');
router.use(parser.json());
// --------
// Initialize middlewares
// Express application
router.use(cookieParser());
// Req'd for passport
router.use(session({
    secret: 'bigBird'
}));
router.use(passport.initialize());
router.use(passport.session())
// ---------
passport.serializeUser((user, done) => {
    done(null, user.id)
});
passport.deserializeUser((user, done) => {
    Users.findUserByUserID(id, (err, user) => {
        done(err, user);
    });
});
// Local strategy
passport.use(new LocalStrategy(
    (username, password, done) => {
        console.log('Username: ' + username, password)
        db.get('SELECT user_id, username FROM users WHERE username = ? AND password = ?', [username, password])
            .then((user) => {
                console.log(user);
                if(!user) return done(null, false);
                console.log('Login Successful!');
                return done(null, row);
            })
            .catch(err => console.log(err.stack))
}));
// Passport routes
// Login
// router.POST('/login', (req, res, next) => {
// });
router.post('/createNewUser', (req, res, next) => {
	console.log(req.body)
    Users.createNewUser(req.body.username, req.body.password, req.body.firstName, req.body.lastName)
        .then((data) => {
        	console.log(data)
            res.header('Content-Type', 'application/json');
            res.send({ data });
        })
        .catch((e) => {
            res.status(401);
        });
});
module.exports = router;