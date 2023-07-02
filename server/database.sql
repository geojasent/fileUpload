CREATE DATABASE imageupload;

CREATE TABLE IF NOT EXISTS stored_file_path(
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    file_path VARCHAR(255) NOT NULL
);