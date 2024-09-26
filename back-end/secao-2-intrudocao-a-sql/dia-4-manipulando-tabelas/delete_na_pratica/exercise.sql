/*
  EXERCISE 1
  Exclua do banco de dados o ator com o nome de “KARL”.
*/
DELETE FROM sakila.actor
WHERE first_name = 'KARL';
  #vai gerar um erro informando que não pode ser deletado por ter 
  #o actor_id referenciado na tabela film_actor
  DELETE FROM sakila.film_actor
  WHERE actor_id = 12;

  # Após deletar sua referencia em outra tabela pode deleta-lo na 
  #tabela actor 

/*
  EXERCISE 2
  Exclua do banco de dados os atores com o nome de “MATTHEW”.
*/
SELECT actor_id
FROM sakila.actor
WHERE first_name = 'MATTHEW'; #para encontrar os actor_id 

DELETE FROM film_actor
WHERE actor_id IN (8, 103, 181);
  #deletando os actor_id encontrados antes de deletar o dados com 
  #nome 'MATTHEW'

DELETE FROM sakila.actor
WHERE first_name = 'MATTHEW';

/*
  EXERCISE 3
  Exclua da tabela film_text todos os registros que possuem a palavra
  “saga” em suas descrições.
*/
DELETE FROM sakila.film_text
WHERE description LIKE '%saga%';

/*
  EXERCISE 4
  Apague da maneira mais performática possível todos os registros das
  tabelas film_actor e film_category.
*/
TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;

/*
  EXERCISE 5
  Inspecione todas as tabelas do banco de dados sakila e analise quais
  restrições ON DELETE foram impostas em cada uma. Use o Table
  Inspector para fazer isso.
*/
  /*
    Clica com o botão direito do mouse na tabela a ser inspecionada,
    em seguida clica em table inspector, vai na aba DDL e procura por
    ON DELETE RESTRICT
  */

/*
  EXERCISE 6
  Exclua o banco de dados e o recrie
*/
  /*
  1- Clica com o botão direito no banco de dados, depois em 'DROP Schema',
  em seguida em'Drop Now'.
  2- Agora que o banco foi excluído, abra novament o script, vai em 
  FILE, Open SQL script, executa, aguarda alguns segundos e depois é 
  só atualizar os bancos
  */