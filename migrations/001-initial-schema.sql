-- UP
CREATE TABLE users(
	user_id	INTEGER	PRIMARY KEY AUTOINCREMENT,
	username	TEXT	NOT NULL,
	password	TEXT	NOT NULL,
	first_name	TEXT	NOT NULL,
	last_name	TEXT	NOT NULL
);

INSERT INTO users (username, password, first_name, last_name) values ('jsmith1', 'abc123', 'John', 'Smith');
INSERT INTO users (username, password, first_name, last_name) values ('aadams1', 'ghi789', 'Amy', 'Adams');
INSERT INTO users (username, password, first_name, last_name) values ('jsnow1', 'def456', 'John', 'Snow');


-- DOWN


DROP TABLE users;

