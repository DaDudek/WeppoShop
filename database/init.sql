CREATE TABLE Product
(
    id   SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(400) NOT NULL,
    price FLOAT NOT NULL
);
