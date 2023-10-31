```sql
SELECT *,
   (CASE WHEN SCORE>= '90' THEN 'A학점'
        WHEN (SCORE>= '80' AND SCORE < '90') THEN 'B학점'
        WHEN (SCORE>= '70' AND SCORE < '80') THEN 'C학점' 
        WHEN (SCORE>= '60' AND SCORE < '70') THEN 'D학점'
        ELSE 'F학점'
    END) AS '학점'
FROM MY_TABLE
```