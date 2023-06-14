#EXERCISE 1 ------------------------------------------------------------
SELECT
	m.title,
	b.domestic_sales,
  b.international_sales
FROM pixar.box_office AS b
INNER JOIN pixar.movies AS m
	ON b.movie_id = m.id;
#-----------------------------------------------------------------------

#EXERCISE 2 ------------------------------------------------------------
SELECT
	m.title,
  (b.domestic_sales + b.international_sales) AS 'numero_de_vendas'
FROM pixar.box_office AS b
	INNER JOIN pixar.movies AS m
		ON b.international_sales > b.domestic_sales
WHERE b.movie_id = m.id;
#-----------------------------------------------------------------------

#EXERCISE 3 ------------------------------------------------------------
SELECT
	m.title,
  b.rating
FROM pixar.movies AS m
INNER JOIN pixar.box_office AS b
	ON b.movie_id = m.id
ORDER BY b.rating DESC;
#-----------------------------------------------------------------------

#EXERCISE 4 ------------------------------------------------------------
SELECT
  t.name,
  t.location,
  m.title,
  m.director,
  m.year,
  m.length_minutes
FROM pixar.theater AS t
LEFT JOIN pixar.movies AS m 
	ON t.id = m.theater_id
ORDER BY t.name;
#-----------------------------------------------------------------------

#EXERCISE 5 ------------------------------------------------------------
SELECT
  t.id,
  t.name AS 'cinema',
  t.location,
	m.title,
  m.director,
  m.year,
  m.length_minutes
FROM pixar.theater AS t
RIGHT JOIN pixar.movies AS m
	ON m.theater_id = t.id
ORDER BY t.name;
#-----------------------------------------------------------------------

#EXERCISE 6 ------------------------------------------------------------
SELECT
	m.id,
	m.title,
  m.director,
  m.year,
  m.length_minutes,
  m.theater_id
FROM pixar.movies AS m
INNER JOIN pixar.box_office AS b
	ON b.movie_id = m.id
WHERE b.rating > 8
	AND m.theater_id IS NOT NULL
#-----------------------------------------------------------------------
