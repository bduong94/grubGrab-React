DROP TABLE IF EXISTS roles CASCADE;


CREATE TABLE roles (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(50) NOT NULL
);