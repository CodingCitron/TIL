# 196. Delete Duplicate Emails
- 중복된 이메일 삭제

```sql
DELETE FROM person
WHERE id NOT IN (
  SELECT sub.min_id
  FROM (
    SELECT MIN(id) AS min_id, email 
    FROM person
    GROUP BY email
  ) sub
)

DELETE p1
FROM person p1
INNER JOIN person p2 ON p1.email = p2.email
WHERE p1.id > p2.id
```