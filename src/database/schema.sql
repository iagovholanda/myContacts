CREATE DATABASE mycontacts;  /* CRIANDO BASE DE DADOS*/

CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; /* CRIA-SE A EXTENSAO PARA O UUID_V4 CASO ELA AINDA NAO EXISTA.*/

CREATE TABLE IF NOT EXISTS categories (
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    name VARCHAR NOT NULL
)

CREATE TABLE IF NOT EXISTS contacts (
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    name VARCHAR NOT NULL,
    email VARCHAR UNIQUE,
    phone VARCHAR,
    category_id UUID,
    FOREIGN KEY (category_id) REFERENCES categories (id)
)
