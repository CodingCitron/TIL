# LEAST 
- 컬럼 중에 가장 큰 값을 반환하는 함수

```sql
SELECT LEAST(val1, var2....);

SELECT LEAST(34, 20, 56, 485, 432, 0, 2);
-- 0

SELECT LEAST('A', 'C', 'B', 'D', 'J', 'E');
-- A
```