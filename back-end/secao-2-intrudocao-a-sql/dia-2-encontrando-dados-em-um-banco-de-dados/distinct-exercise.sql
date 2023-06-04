/*
CREATE DATABASE `Escola`;
CREATE TABLE IF NOT EXISTS Escola.Estudantes (
    `Nome` VARCHAR(7) CHARACTER SET utf8,
    `Idade` INT
);
INSERT INTO Escola.Estudantes VALUES
    ('Rafael', 25),
    ('Amanda', 30),
    ('Roberto', 45),
    ('Carol', 19),
    ('Amanda', 25);

  Em relação à base de dados criada acima, responda:
    1- Monte uma query para encontrar pares únicos de nomes e idades.
    2- Quantas linhas você encontraria na query anterior?
    3- Monte uma query para encontrar somente os nomes únicos.
    4- Quantas linhas você encontraria na query anterior?
    5- Monte uma query para encontrar somente as idades únicas.
    6- Quantas linhas você encontraria na query anterior?
*/

#EXERCISE 1
SELECT DISTINCT Idade FROM Escola.Estudantes;

/*
EXERCISE 2
  5 linhas, pois todos os conjuntos de informações
  "Nome + Idade" são únicos
*/

#EXERCISE 3
SELECT DISTINCT Nome FROM Escola.Estudantes;

/*
EXERCISE 4
  4 linhas, pois olhando apenas o dado referente a coluna "Nome"
  temos 4 valores únicos, pois o nome "Amanda" encontra-se repetido
*/

#EXERCISE 5
SELECT DISTINCT Idade FROM Escola.Estudantes;

/*
EXERCISE 6
  4 linhas, pois olhando apenas o dado referente a coluna "Idade"
  temos 4 valores únicos, pois a idade "25" encontra-se repetida
*/