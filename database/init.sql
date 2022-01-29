CREATE TABLE Product
(
    id   SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(400) NOT NULL,
    price FLOAT NOT NULL
);

CREATE TABLE Order
(
    id   SERIAL PRIMARY KEY,
    price FLOAT NOT NULL,
    address VARCHAR(200) NOT NULL,
    status  VARCHAR(100) NOT NULL,
);
