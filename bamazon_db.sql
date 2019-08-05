DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db ;

CREATE TABLE products (
    id INTEGER AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(45) NOT NULL,
    price INTEGER NOT NULL,
    stock_quantity INTEGER NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ("Fresh Prince of Bel-Air Season 5", "Movies", 50, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ("Fairy Tail Final Season", "Movies", 40, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ("iPhone X", "Phone", 900, 8);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ("Samsung Note 8", "Phone", 800, 6);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ("LG 50in", "TV", 850, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ("Samsung 70in", "TV", 1000, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ("Skittles", "Candy", 5, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ("Herseys", "Candy", 5, 45);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ("Ibprofun", "Medicine", 8, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ("Advil", "Medicine", 8, 25);