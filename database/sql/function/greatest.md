# GREATEST 
- 컬럼 중에 가장 큰 값을 반환하는 함수

```sql
SELECT GREATEST(val1, var2....);

SELECT GREATEST(34, 20, 56, 485, 432, 0, 2);
-- 485

SELECT GREATEST('A', 'C', 'B', 'D', 'J', 'E');
-- J
```