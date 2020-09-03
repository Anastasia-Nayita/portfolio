--4 colums here (id, city, state, country)

DROP TABLE IF EXISTS cities;

CREATE TABLE cities (
    id SERIAL primary key, --automaticly adding unique numbers to each city
    city VARCHAR(255) NOT NULL,
    population INT,
    country VARCHAR
);
-- all content lowCase, all commands Capitalize

INSERT INTO cities (city, country, population)
VALUES ('Berlin', 'Germany', 376900);

INSERT INTO cities (city, country, population)
VALUES ('Tokio', 'Japan', 927300);

INSERT INTO cities (city, country, population)
VALUES ('Montreal', 'Canada', 1750000);

UPDATE cities SET population=3769000 WHERE id=1;
UPDATE cities SET population=9273000 WHERE id=2;
UPDATE cities SET city='Hamburg' WHERE id=1; --adds falsy info 