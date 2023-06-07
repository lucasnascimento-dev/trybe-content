/*
  EXERCISE 1
  Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.
*/
SELECT UCASE('TRYBE');
/*
  EXERCISE 2
  Faça uma query que transforme a frase 'A Internet mudou o mundo' em
  'A IA mudou o mundo'.
*/
SELECT REPLACE('A Internet mudou o mundo', 'Internet', 'IA');

/*
  EXERCISE 3
  Utilizando uma query, encontre quantos caracteres temos em 'Uma frase
  qualquer'.
*/
SELECT LENGTH('Uma frase qualquer');

/*
  EXERCISE 4
  Extraia e retorne apenas a palavra “JavaScript” da frase
  'A linguagem JavaScript está entre as mais usadas'.
*/
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);

/*
  EXERCISE 5
  Por fim, padronize a string 'RUA NORTE 1500, RIO DE JANEIRO, BRASIL'
  para que suas informações estejam todas em caixa baixa.
*/
SELECT LCASE('RUA NORTE 1500, RIO DE JANEIRO, BRASIL');
