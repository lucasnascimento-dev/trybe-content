/*
 De acordo com a tabela staff do banco de dados sakila. Como poderíamos
 responder às seguintes questões?

  1- Quantas senhas temos cadastradas nessa tabela?
  2- Quantas pessoas temos no total trabalhando para nossa empresa?
*/

# EXERCISE 1
SELECT COUNT(password) FROM sakila.staff;

# EXERCISE 2
SELECT COUNT(*) FROM sakila.staff;

/*
password aceita valores nulos, por isso tem menos dados do que 
inserções
*/