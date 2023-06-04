/*
1- Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT;
2- Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome “Data Atual”.
3- Vamos agora entrar no banco de dados sakila e encontrar as seguintes informações, montando uma query para cada uma:
4- Escreva uma query que selecione todos os registros da tabela city;
5- Escreva uma query que exiba apenas os registros das colunas first_name e last_name da tabela customer;
6- Escreva uma query que exiba todos os registros da tabela rental;
7- Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film;
8- Utilize o SELECT para explorar todas as tabelas do banco de dados.
*/

# EXERCISE 1
SELECT13 13 * 8;

# EXERCISE 2
SELECT NOW() AS "Data Atual";

/*
EXERCISE 3
- O 'USE sakila' poderia ser usado para evitar declará-lo
posteriormente, conforme o EXERCISE 4
*/
SELECT * FROM sakila.city; 

# EXERCISE 4
USE sakila;
SELECT first_name, last_name FROM customer;

# EXERCISE 5
SELECT * FROM sakila.rental;

# EXERCISE 6
SELECT title, description, release_year FROM sakila.film;

# EXERCISE 7
#SELECT coluna_a_ser_explorada FROM database.nome_tabela;