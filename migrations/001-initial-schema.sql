-- UP

CREATE TABLE users(
	user_id	INTEGER	PRIMARY KEY,
	username	TEXT	NOT NULL,
	password	TEXT	NOT NULL
);

-- DOWN

DROP TABLE users;
