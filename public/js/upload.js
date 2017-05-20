// Firebase stuff goes here

// differentiate images by including uderID from session
// get userID from localStorage in 'current user'

// create followers table in sqlite:
/*
userId and followerId as columns in table you POST with 
localStorage userId and then use the followerId as 
whomever's post it is
*/

// merge followers and posts to create followerFeed table
/*
then merge posts with followers table, using 
userId = id as merging point and you want posts, userId
and followerId left. function to disply followers posts 
will be find by ID where ID is localStorage userID and 
should db.all get posts based on that ID and that should then 
be the corresponding people you follows posts.
*/

// move firebase over to homefeed/profile page html
// create back buttons on homefeed, upload and signup html


/* 
need to create Home Feed that is not profile page
for the followers main feed
*/


/* GET(Firebase) {
	user's <img download link> in new folder for user, based on username
 }
*/

/* POST('api/:id/posts'){
	to posts table in DB <img download link> in post column
}
*/
