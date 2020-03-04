CREATE DATABASE musicReview;

CREATE TABLE albums
(
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    band VARCHAR,
    release_year INT,
    category TEXT
);


CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    username VARCHAR,
    email VARCHAR,
    password VARCHAR

);

CREATE TABLE reviews
(
    id SERIAL PRIMARY KEY,
    reviewerID INT REFERENCES users (id),
    stars INT CHECK (stars <= 6),
    title VARCHAR,
    review VARCHAR,
    albumid INT REFERENCES albums (id)

);



