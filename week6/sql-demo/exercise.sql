--4 colums here (id, city, state, country)

CREATE TABLE actors (
    id SERIAL primary key, --automaticly adding unique numbers to each city
    name VARCHAR(255) NOT NULL,
    age INT,
    numberOfOscars INT
);
-- all content lowCase, all commands Capitalize

INSERT INTO actors (name, age, numberOfOscars)
VALUES ('Leonardo DiCaprio', 41, 1);

INSERT INTO actors (name, age, numberOfOscars)
VALUES ('Jennifer Lawrence', 25, 1);

INSERT INTO actors (name, age, numberOfOscars)
VALUES ('Samuel L. Jackson', 67, 0);

INSERT INTO actors (name, age, numberOfOscars)
VALUES ('Meryl Streep', 66, 3);

INSERT INTO actors (name, age, numberOfOscars)
VALUES ('John Cho', 43, 0);

SELECT * FROM actors WHERE numberOfOscars >1;
SELECT * FROM actors WHERE age >30;