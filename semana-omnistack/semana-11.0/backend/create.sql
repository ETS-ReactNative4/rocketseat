-- omnistack.incidents definition

-- Drop table

-- DROP TABLE omnistack.incidents;

-- omnistack.ongs definition

-- Drop table

-- DROP TABLE omnistack.ongs;
-- DROP SCHEMA omnistack;

CREATE SCHEMA IF NOT EXISTS omnistack AUTHORIZATION omnistack_user;

CREATE TABLE IF NOT EXISTS omnistack.ongs (
	ong_id varchar(50) NOT NULL,
	"name" varchar(64) NOT NULL,
	email varchar(255) NOT NULL,
	city varchar(32) NOT NULL,
	uf varchar(2) NOT NULL,
	whatsapp varchar(11) NOT NULL,
	CONSTRAINT ongs_pkey PRIMARY KEY (ong_id)
);

CREATE TABLE IF NOT EXISTS omnistack.incidents (
	incident_id bigserial NOT NULL,
	title varchar(64) NOT NULL,
	description varchar(255) NOT NULL,
	amount float8 NOT NULL,
	ong_id varchar(255) NOT NULL,
	CONSTRAINT incidents_pkey PRIMARY KEY (incident_id)
);


-- omnistack.incidents foreign keys
ALTER TABLE omnistack.incidents ADD CONSTRAINT incidents_ong_id_fkey FOREIGN KEY (ong_id) REFERENCES omnistack.ongs(ong_id) ON UPDATE CASCADE;