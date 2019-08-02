CREATE TABLE sticky_posts (
    id SERIAL NOT NULL PRIMARY KEY,
    external_id INTEGER REFERENCES posts (external_id)
);