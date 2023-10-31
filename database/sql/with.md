- [참조](https://heodolf.tistory.com/71)
- [참조](https://royzero.tistory.com/50)

```sql
with [name] as (
  [subquery]
)

-- ex)
WITH VW_VENDOR AS (
    SELECT S.SITE_CODE, S.SITE_NAME, V.VNDR_CODE, V.VNDR_NAME
      FROM TB_SITE AS S
      JOIN TB_SITE_VENDOR AS SV ON S.SITE_CODE = SV.SITE_CODE
     WHERE S.SITE_CODE = '101'
     UNION ALL
    SELECT S.SITE_CODE, S.SITE_NAME, V.VNDR_CODE, V.VNDR_NAME
      FROM TB_SITE AS S
      JOIN TB_SITE_VENDOR AS SV ON S.SITE_CODE = SV.SITE_CODE
     WHERE S.SITE_CODE = '102'
)
SELECT *
  FROM VW_VENDOR
 WHERE VNDR_CODE = '1001'
```