-- UP
CREATE TABLE users(
	user_id	INTEGER	PRIMARY KEY AUTOINCREMENT,
	username	TEXT	NOT NULL,
	password	TEXT	NOT NULL,
	first_name	TEXT	NOT NULL,
	last_name	TEXT	NOT NULL,
	profile_pic	TEXT
);

CREATE TABLE posts(
	id 	INTEGER	PRIMARY KEY,
	post 	TEXT	NOT NULL
);

INSERT INTO users (username, password, first_name, last_name) VALUES ('jsmith1', 'abc123', 'John', 'Smith');
INSERT INTO users (username, password, first_name, last_name) VALUES ('aadams1', 'ghi789', 'Amy', 'Adams');
INSERT INTO users (username, password, first_name, last_name) VALUES ('jsnow1', 'def456', 'John', 'Snow');

INSERT INTO posts (id, post) VALUES (1, 'https://www.bigstockphoto.com/images/homepage/2016_bigstock_picks.jpg');
INSERT INTO posts (id, post) VALUES (2, 'https://www.sitebuilderreport.com/assets/facebook-stock-up-446fff24fb11820517c520c4a5a4c032.jpg');
INSERT INTO posts (id, post) VALUES (3, 'https://www.bigstockphoto.com/images/homepage/2016_bigstock_video.jpg');

-- DOWN


DROP TABLE users;
DROP TABLE posts;
