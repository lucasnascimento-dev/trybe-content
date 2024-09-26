# EXERCÍCIO 1 ---------------------------------------------------------
SELECT MAX(salary) 
FROM hr.employees;
#----------------------------------------------------------------------

# EXERCÍCIO 2 ---------------------------------------------------------
SELECT MAX(salary) - MIN(salary)
FROM hr.employees;
#----------------------------------------------------------------------

# EXERCÍCIO 3 ---------------------------------------------------------
SELECT job_id, AVG(salary) AS media_salarial
FROM hr.employees
GROUP BY job_id
ORDER BY media_salarial DESC;
#----------------------------------------------------------------------

# EXERCÍCIO 4 ---------------------------------------------------------
SELECT SUM(salary)
FROM hr.employees;
#----------------------------------------------------------------------

# EXERCÍCIO 5 ---------------------------------------------------------
SELECT 
	MAX(salary) AS maior_salario,
  MIN(salary) AS menor_salario,
  SUM(salary) AS soma_total_salarios,
  ROUND(AVG(salary), 2) AS media_salarial
FROM hr.employees;
#----------------------------------------------------------------------

# EXERCÍCIO 6 ---------------------------------------------------------
SELECT job_id, COUNT(job_id) AS total
FROM hr.employees
WHERE job_id = 'it_prog'
#----------------------------------------------------------------------

# EXERCÍCIO 7 ---------------------------------------------------------
SELECT job_id, SUM(salary)
FROM hr.employees
GROUP BY job_id;
#----------------------------------------------------------------------

# EXERCÍCIO 8 ---------------------------------------------------------
SELECT job_id, SUM(salary)
FROM hr.employees
GROUP BY job_id
HAVING job_id = 'it_prog';
#----------------------------------------------------------------------

# EXERCÍCIO 9 ---------------------------------------------------------
SELECT 
	job_id,
	ROUND(AVG(salary), 2) AS media_salarial
FROM hr.employees
GROUP BY job_id
HAVING job_id <> 'it_prog'
ORDER BY media_salarial DESC;
# ou com GROUP BY e HAVING ou com o WHERE antes do GROUP BY
SELECT job_id, AVG(salary) 'average_salary'
FROM hr.employees
WHERE job_id <> 'it_prog'
GROUP BY job_id
ORDER BY average_salary DESC;
#----------------------------------------------------------------------

# EXERCÍCIO 10 ---------------------------------------------------------
SELECT
	department_id,
	ROUND(AVG(salary), 2) AS media_salarial,
  COUNT(*) AS qtd_funcionarios
FROM hr.employees
GROUP BY department_id
HAVING qtd_funcionarios > 10;
#----------------------------------------------------------------------

# EXERCÍCIO 11 ---------------------------------------------------------
SET SQL_SAFE_UPDATES = 0;

UPDATE hr.employees
SET phone_number = REPLACE (phone_number, '515', 777)
WHERE phone_number LIKE '515%';
#----------------------------------------------------------------------

# EXERCÍCIO 12 ---------------------------------------------------------
SELECT * FROM hr.employees
WHERE LENGTH(first_name) >= 8;
#----------------------------------------------------------------------

# EXERCÍCIO 13 ---------------------------------------------------------
SELECT
	employee_id,
  first_name,
  YEAR(hire_date) AS ano_admissao
FROM hr.employees;
#----------------------------------------------------------------------

# EXERCÍCIO 14 ---------------------------------------------------------
SELECT
	employee_id,
  first_name,
  DAY(hire_date) AS dia_admissao
FROM hr.employees;
#----------------------------------------------------------------------

# EXERCÍCIO 15 ---------------------------------------------------------
SELECT
	employee_id,
  first_name,
  MONTH(hire_date) AS mes_admissao
FROM hr.employees;	
#----------------------------------------------------------------------

# EXERCÍCIO 16 ---------------------------------------------------------
SELECT
	UCASE(CONCAT(first_name, ' ', last_name)) AS nome_completo
FROM hr.employees;

#----------------------------------------------------------------------

# EXERCÍCIO 17 ---------------------------------------------------------
SELECT
	last_name,
  hire_date
FROM hr.employees
WHERE MONTH(hire_date) = 7 # hire_date BETWEEN '1987-07-01' AND '1987-07-31'
AND YEAR(hire_date) = 1987;
#----------------------------------------------------------------------

# EXERCÍCIO 18 ---------------------------------------------------------
SELECT
	first_name,
  last_name,
  DATEDIFF(CURRENT_DATE(), hire_date) AS dias_empregado
FROM hr.employees;
#----------------------------------------------------------------------