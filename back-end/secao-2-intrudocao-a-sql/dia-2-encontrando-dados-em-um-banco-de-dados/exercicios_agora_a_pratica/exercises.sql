# EXERCISE 1 
SELECT "This is SQL Exercise, Practice and Solution";

# EXERCISE 2
SELECT 1, 2, 3;

# EXERCISE 3
SELECT 10 + 15;

# EXERCISE 4
SELECT (3 * 5) + 6;

# EXERCISE 5
SELECT * FROM Scientists;

# EXERCISE 6
SELECT Name AS "Nome do Projeto", Hours AS "Tempo de Trabalho" FROM Scientists.Projects;

# EXERCISE 7
SELECT Name 
FROM Scientists.Scientists
ORDER BY Name;

# EXERCISE 8
SELECT Name
FROM Scientists.Projects
ORDER BY Name DESC;

# EXERCISE 9
SELECT CONCAT("O projeto ", Name, " precisou de ", Hours, " horas para ser concluído")
FROM Scientists.Projects;

# EXERCISE 10
SELECT Name, Hours
FROM Scientists.Projects
ORDER BY Hours DESC
LIMIT 3;

# EXERCISE 11
SELECT DISTINCT Project FROM Scientists.AssignedTo;

# EXERCISE 12
SELECT * FROM Scientists.Projects
ORDER BY Hours DESC
LIMIT 1;

# EXERCISE 13
SELECT Name FROM Scientists.Projects 
ORDER BY Hours
LIMIT 1 OFFSET 1;

# EXERCISE 14
SELECT * FROM Scientists.Projects
ORDER BY Hours
LIMIT 5;

# EXERCISE 15
SELECT CONCAT("Existem ", COUNT(DISTINCT Name), " cientistas na tabela Scientists") FROM Scientists.Scientists;