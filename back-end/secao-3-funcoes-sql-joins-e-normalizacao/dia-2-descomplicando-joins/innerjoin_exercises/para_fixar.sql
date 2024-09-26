#EXERCISE 1 ------------------------------------------------------------
SELECT 
	a.actor_id,
  a.first_name,
	f.film_id
FROM 
	sakila.actor AS a
INNER JOIN 
	sakila.film_actor AS f ON a.actor_id = f.actor_id;
#-----------------------------------------------------------------------

#EXERCISE 2 ------------------------------------------------------------
SELECT
	s.first_name,
  s.last_name,
  a.address
FROM
	sakila.staff AS s
INNER JOIN 
	sakila.address AS a ON a.address_id = s.address_id;
#-----------------------------------------------------------------------

#EXERCISE 3 ------------------------------------------------------------
SELECT
	c.customer_id,
  c.first_name,
  c.email,
  c.address_id,
  a.address
FROM sakila.customer AS c
INNER JOIN
	sakila.address AS a ON c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;
#-----------------------------------------------------------------------

#EXERCISE 4 ------------------------------------------------------------
SELECT
	c.first_name,
  c.email,
  c.address_id,
  a.address,
  a.district
FROM
	sakila.customer AS c
INNER JOIN
	sakila.address AS a ON c.address_id = a.address_id
WHERE
	a.district = 'California'
  AND c.first_name LIKE '%rene%';
#-----------------------------------------------------------------------

#EXERCISE 5 ------------------------------------------------------------
SELECT
	c.first_name,
  c.last_name,
  COUNT(r.rental_id) AS 'quantidade de filmes alugados'
FROM
	sakila.rental AS r
INNER JOIN
	sakila.customer AS c ON r.customer_id = c.customer_id
WHERE
	c.active = 1
GROUP BY
	r.customer_id
ORDER BY
	c.first_name DESC, c.last_name DESC;
#-----------------------------------------------------------------------

#EXERCISE 6 ------------------------------------------------------------
SELECT
	s.first_name,
  s.last_name,
  AVG(p.amount) as 'media de pagamento'
FROM
	sakila.staff AS s
INNER JOIN
	sakila.payment AS p ON s.staff_id = p.staff_id
WHERE
	YEAR(p.payment_date) = 2006
GROUP BY
	s.first_name, s.last_name;
#-----------------------------------------------------------------------

#EXERCISE 7 ------------------------------------------------------------
SELECT
	a.actor_id,
  a.first_name,
  f.film_id,
  f.title
FROM
	sakila.actor AS a
INNER JOIN
	sakila.film_actor as fa
  ON a.actor_id = fa.film_id
INNER JOIN
	sakila.film as f
  ON fa.film_id = f.film_id
#-----------------------------------------------------------------------
