-- SCHEMA CONFIGURATION

DROP DATABASE IF EXISTS expenses_dev;
CREATE DATABASE expenses_dev;

\c expenses_dev;
-- References tables drop first and are created last
DROP TABLE IF EXISTS transactions;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS categories;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_abstraction VARCHAR(50) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
-- Faster lookups
CREATE INDEX ON users (username);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX ON categories (name);

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    amount INTEGER NOT NULL,
    category_name VARCHAR(255) REFERENCES categories (name) ON DELETE CASCADE,
    -- username_id INTEGER REFERENCES users (id) ON DELETE CASCADE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX ON transactions (description);
CREATE INDEX ON transactions (created_at);
