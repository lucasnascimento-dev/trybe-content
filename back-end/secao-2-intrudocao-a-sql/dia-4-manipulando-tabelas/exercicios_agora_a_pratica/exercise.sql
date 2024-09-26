/*
  EXERCISE 1
  Insira as produções da Pixar na tabela movies:

    -Monstros SA, de Pete Docter, lançado em 2001, com 92 minutos de duração.
    -Procurando Nemo, de John Lasseter, lançado em 2003, com 107 minutos de duração.
    -Os Incríveis, de Brad Bird, lançado em 2004, com 116 minutos de duração.
    -WALL-E, de Pete Docter, lançada em 2008, com 104 minutos de duração.
*/
INSERT INTO 
	pixar.movies(title, director, `year`, length_minutes) 
VALUES
	('Monstros SA', 'Pete Docter', 2001, 92),
  ('Procurando Nemo', 'John Lasseter', 2003, 107),
	('Os Incríveis', 'Brad Bird', 2004, 116),
	('WALL-E', 'Pete Docter', 2008, 104);

/*
  EXERCISE 2
  O filme Procurando Nemo foi classificado em 6.8, fez 450 milhões no
  mercado interno e 370 milhões no mercado internacional.
  Insira as informações à tabela box_office.
*/
INSERT INTO 
	pixar.box_office(movie_id, rating, domestic_sales, international_sales)
VALUES
	(9, 6.8, 450000000, 370000000);

/*
  EXERCISE 3
  O nome do diretor do filme “Procurando Nemo” está incorreto, ele foi
   dirigido por Andrew Stanton. Corrija esse dado utilizando o comando 
  UPDATE.
*/
SET SQL_SAFE_UPDATES = 0;
UPDATE pixar.movies
SET director = 'Andrew Stanton'
WHERE director = 'John Lasseter';

/*
  EXERCISE 4
  O título do filme “Ratatouille” está incorreto na tabela movies.
  Além disso, o filme foi lançado em 2007 e não em 2010. Corrija esses
  dados utilizando o comando UPDATE.
*/
UPDATE pixar.movies
SET title = 'Ratatouille', `year` = 2007
WHERE title = 'ratatui';

/*
  EXERCISE 5
  Insira as novas classificações abaixo na tabela box_office, lembre-se
  que a coluna movie_id é uma foreign key referente a coluna id da
  tabela movies:
    -Monsters SA, classificado em 8.5, lucrou 300 milhões no mercado interno e 250 milhões no mercado internacional.
    -Os Incríveis, classificado em 7.4, lucrou 460 milhões no mercado interno e 510 milhões no mercado internacional.
    -WALL-E, classificado em 9.9, lucrou 290 milhões no mercado interno e 280 milhões no mercado internacional.
*/
INSERT INTO 
	pixar.box_office(movie_id, rating, domestic_sales, international_sales)
VALUES
	(8, 8.5, 300000000, 250000000),
  (10, 7.4, 460000000, 510000000),
  (11, 9.9, 290000000, 280000000);

/*
  EXERCISE 6
  Exclua da tabela movies o filme “WALL-E”.
*/
DELETE FROM pixar.box_office
WHERE movie_id = 11;

DELETE FROM pixar.movies
WHERE title = 'WALL-E';

/*
  EXERCISE 7
  Exclua da tabela movies todos os filmes dirigidos por
  “Andrew Stanton”.
*/
SELECT id FROM pixar.movies 
WHERE director = 'Andrew Stanton';

DELETE FROM pixar.box_office
WHERE movie_id IN (1, 2, 5, 6, 9);

DELETE FROM pixar.movies
WHERE director = 'Andrew Stanton'

/*
  EXERCISE 8
  Altere a classificação da tabela box_office para 9.0 de todos os
  filmes que lucraram mais de 400 milhões no mercado interno.
*/
UPDATE pixar.box_office
SET rating = 9.0
WHERE domestic_sales > 400000000;

/*
  EXERCISE 9
  Altere a classificação da tabela box_office para 6.0 de todos os
  filmes que lucraram menos de 300 milhões no mercado internacional
  e mais de 200 milhões no mercado interno.
*/
UPDATE pixar.box_office
SET rating = 6.0
WHERE international_sales < 300000000 
AND domestic_sales > 200000000;

/*
  EXERCISE 10
  Exclua da tabela movies todos os filmes com menos de 100 minutos
  de duração.
*/
SELECT * FROM pixar.movies 
WHERE length_minutes < 100;

DELETE FROM pixar.box_office
WHERE movie_id IN (7, 8);

DELETE FROM pixar.movies
WHERE length_minutes < 100;