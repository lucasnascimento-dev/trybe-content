/*
  EXERCISE 1-
  Insira um novo funcionário na tabela sakila.staff.
    Para saber quais campos são obrigatórios, clique com o botão 
    direito na tabela sakila.staff e selecione Table Inspector.
    Clique na aba columns e verifique quais campos aceitam nulos
    para te guiar. Lembre-se de que valores que são gerados
    automaticamente não precisam ser inseridos manualmente. Boa
    exploração!
*/
INSERT INTO sakila.staff 
  (first_name, last_name, address_id, store_id, active, username)
VALUES ('Lucas', 'Nascimento', 6, 1, 1, 'Lucas');

/*
  EXERCISE 2
  Feito o exercício anterior, vamos agora para o nível 2. Insira dois
  funcionários novos em apenas uma query.
*/
INSERT INTO sakila.staff
  (first_name, last_name, address_id, store_id, active, username)
VALUES 
	('Julinho', 'da Van', 4, 1, 1, 'Julinho'),
  ('Marcelo', 'Falcão', 5, 1, 1, 'Falcão');

/*
  EXERCISE 3
  Selecione os cinco primeiros nomes e sobrenomes da tabela
  sakila.customer e cadastre essas pessoas como atores na tabela
  sakila.actor.
*/
INSERT INTO sakila.actor(first_name, last_name)
	SELECT first_name, last_name FROM sakila.customer
	ORDER BY customer_id
	LIMIT 5;

/*
  EXERCISE 4
  Cadastre três categorias de uma vez só na tabela sakila.category.
*/
INSERT INTO sakila.category (name)
VALUES
	('Games'),
  ('Historic')
  ('Biographi');

/*
  EXERCISE 5
  Cadastre uma nova loja na tabela sakila.store.
*/
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES ('3', '3');