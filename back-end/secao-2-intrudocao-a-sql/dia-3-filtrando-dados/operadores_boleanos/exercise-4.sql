/*
EXERCISE 1
Quantos pagamentos temos com a data de retorno 2005-05-25? Há
múltiplas maneiras possíveis de encontrar a resposta.
*/
SELECT COUNT(*) FROM sakila.payment
WHERE DATE(payment_date) = '2005-05-25';

/*
EXERCISE 2
Quantos pagamentos foram feitos entre 01/07/2005 e 22/08/2005?
*/
SELECT COUNT(*) FROM sakila.payment
WHERE DATE(payment_date) BETWEEN '2005-07-01' AND '2005-08-22';

/*
EXERCISE 3
Usando a tabela rental, extraia data, ano, mês, dia, hora, minuto e
segundo dos registros com rental_id = 10330. Utilize a coluna
rental_date para extrair as informações.
*/
SELECT 
  DATE(rental_date) AS 'DATA',
  YEAR(rental_date) AS 'YEAR',
  MONTH(rental_date) AS 'MONTH',
  DAY(rental_date) AS  'DAY',
  HOUR(rental_date) AS 'HOUR',
  MINUTE(rental_date) AS 'MINUTE',
  SECOND(rental_date) AS 'SECOND'
FROM
  sakila.rental
WHERE
  rental_id = 10330;

/*
EXERCISE 4
Monte uma query que retorne todos os dados do pagamento feito no
dia 28/07/2005 a partir das 22 horas.
*/
SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-28' AND HOUR(payment_date) >= 22;