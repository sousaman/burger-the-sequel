-- Creates database
CREATE DATABASE burgers_db;

-- Use the database just created
USE burgers_db;

-- Initializes burgers table that has 3 values and set the id to be primary key
CREATE TABLE burgers (
  id INT(11) AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(100) DEFAULT '',
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);