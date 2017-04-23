const express = require('express');
const router = express();
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const Users = require('./users');
const parser = require('body-parser');
router.use(parser.json());

let db;
// --------
// Initialize middlewares
// Express application
router.use(cookieParser());
// Req'd for passport
router.use(session({
    secret: 'bigBird'
}));
// ---------
passport.serializeUser((user, done) => {
    done(null, user)
});
passport.deserializeUser((user, done) => {
    console.log(user, '------------')
    done(null, user);
});
// Local strategy
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, (username, password, done) => {
        console.log('Username: ' + username, password)
        db.get('SELECT user_id, username FROM users WHERE username = ? AND password = ?', [username, password])
            .then((user) => {
                console.log(user);
                if(!user) return done(null, false);
                console.log('Login Successful!');
                return done(null, user);
            })
            .catch(err => console.log(err.stack))
}));
router.use(passport.initialize());
router.use(passport.session())
// Passport routes
// Login
router.post('/login', passport.authenticate('local'), (request, response, next) => {
    console.log('In login.')
    passport.authenticate('local', (err, user, info) => {
        console.log('IN passport.authenticate')
        if (err) console.log(err);
        if (!user) console.log(user);

        request.logIn(user, (err) => {
            console.log('LOGGED IN')
            if (err) return next(err);
            console.log('SESSION')
            console.log(request.session)
            // if we are here, user has logged in!
            response.header('Content-Type', 'application/json');

            response.send({
                success: true,
            });
        });
    })(request, response, next);
});
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


router.use((request, response, next) => {
    console.log('!!!here', request.isAuthenticated())
    if (request.isAuthenticated()) {
        next();
        
    }
    else {
        response.status(403);
        response.send({success: false})
    }
})


module.exports = (theDb) => {
    db = theDb;
    return router;
}

