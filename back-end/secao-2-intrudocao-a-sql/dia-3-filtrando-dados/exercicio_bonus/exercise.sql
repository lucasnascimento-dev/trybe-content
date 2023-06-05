/*
EXERCISE 1
*/
SELECT * FROM Scientists.Scientists
WHERE Name LIKE '%e%';

/*
EXERCISE 2
*/
SELECT * FROM Scientists.Projects
WHERE Code LIKE 'A%' ORDER BY Name;

/*
EXERCISE 3
*/
SELECT Code, Name FROM Scientists.Projects
WHERE Code LIKE '%3%' ORDER BY Name;

/*
EXERCISE 4
*/
SELECT * FROM Scientists.AssignedTo
WHERE Project IN ('AeH3', 'Ast3', 'Che1');

/*
EXERCISE 5
*/
SELECT * FROM Scientists.Projects
WHERE Hours > 500;

/*
EXERCISE 6
*/
SELECT * FROM Scientists.Projects
WHERE Hours BETWEEN 251 AND 799;

/*
EXERCISE 7
*/
SELECT * FROM Scientists.Projects
WHERE Name NOT LIKE 'A%';

/*
EXERCISE 8
*/
SELECT Name FROM Scientists.Projects
WHERE Code LIKE '%H%';