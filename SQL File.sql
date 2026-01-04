-- students кестесін құрастыру
CREATE TABLE students(
id SERIAL PRIMARY KEY,
name VARCHAR(50),
age INT,
grade CHAR(2)
)

-- students кестесінен ақпаратты қарау
SELECT * FROM students

-- students кестесінен керек ақпаратты қарау
SELECT name,age FROM students;  

-- students кестесінен сұрыптау
SELECT *FROM students WHERE age>21;

-- Ақпарат енгізу
INSERT INTO students (name,age,grade)
VALUES ('Aisulu',18,89),
('Galymbek',19,99),
('Miras',21,95),
('Efrat',27,96),
('Kuka',28,95)

-- Ақпарат өшіру
DELETE * FROM students

-- students кестесінен сұрыптау
SELECT *FROM students WHERE age<21 OR name ='Efrat';


SELECT *FROM students ORDER BY name ASC;


SELECT *FROM students ORDER BY name ASC LIMIT 3;

SELECT *FROM students ORDER BY name ASC

---- students кестесінен ақпаратты жаңарту
UPDATE students 
SET age =22
WHERE name ='Aisulu'





SELECT *FROM students ORDER BY age DESC;




