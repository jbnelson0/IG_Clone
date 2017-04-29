-- UP
CREATE TABLE users(
	user_id	INTEGER	PRIMARY KEY AUTOINCREMENT,
	username	TEXT	NOT NULL,
	password	TEXT	NOT NULL,
	first_name	TEXT	NOT NULL,
	last_name	TEXT	NOT NULL
);

INSERT INTO users (username, password, first_name, last_name) values ('jsmith1', 'abc123', 'John', 'Smith')

-- DOWN


DROP TABLE users;

