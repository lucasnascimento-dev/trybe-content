# EXERCÍCIOS REFERENTE A TABELA sakila.film

# EXERCISE 1
SELECT * FROM sakila.film;

# EXERCISE 2
SELECT title, release_year, rental_rate FROM sakila.film;

# EXERCISE 3
SELECT COUNT(*) FROM sakila.film;

# EXERCÍCIOS REFERENTE A TABELA sakila.actor

# EXERCISE 1
SELECT DISTINCT last_name FROM sakila.actor;

# EXERCISE 2
SELECT COUNT(DISTINCT last_name) FROM sakila.actor;

# EXERCISE 3
SELECT * FROM sakila.actor ORDER BY last_name, first_name DESC;

# EXERCÍCIOS REFERENTE A TABELA sakila.language

# EXERCISE 1
SELECT DISTINCT name FROM sakila.language LIMIT 5 OFFSET 1;

# EXERCÍCIOS REFERENTE A TABELA sakila.film

# EXERCISE 1
SELECT title, release_year, length, rating, replacement_cost 
FROM sakila.film
ORDER BY length DESC, replacement_cost
LIMIT 20;