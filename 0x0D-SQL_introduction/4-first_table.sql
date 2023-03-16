#!/bin/bash
-- creates a table called first_table in the current database in your MySQL server
CREATES first_table ( id INT, name VARCHAR(256)) IF NOT EXISTS first_table;
