-- UP
CREATE TABLE LOGIN(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    password	TEXT NOT NULL
);


-- CREATE TABLE user(
-- 	user_id	INTEGER	PRIMARY KEY,

CREATE TABLE USERS(
	user_id	INTEGER	PRIMARY KEY AUTOINCREMENT,

	first_name	INTEGER NOT NULL,
	last_name	INTEGER	NOT NULL,
	username	TEXT	NOT NULL,
	password	TEXT	NOT NULL
);



-- DOWN

DROP TABLE LOGIN;
DROP TABLE USERS;
-- DROP TABLE FOLLOWERS;
