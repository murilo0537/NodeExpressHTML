CREATE DATABASE node_index;
USE node_index;

CREATE TABLE Users (
id INT auto_increment not null primary key,
username varchar(100) not null unique,
email varchar(255) not null unique,
password varchar(255) not null
);

SELECT * FROM Users;