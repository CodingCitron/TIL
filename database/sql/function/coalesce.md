# COALESCE
- COALESCE는 지정한 표현식들 중에 NULL이 아닌 첫 번째 값을 반환한다.

```sql
SELECT COALESCE(Column명1, Column명1이 NULL인 경우 대체할 값)
FROM 테이블명

-- 배타적 OR 관계 열
-- Column1 ~ 4 중 NULL이 아닌 첫 번째 Column을 출력
SELECT COALESCE(Column명1, Column명2, Column명3, Column명4)
FROM 테이블명

-- NAME Column의 값이 NULL인 경우 다음 표현식으로 넘어간다.
-- 다음 표현식인 "No name"이 Null이 아니므로 "No name"을 출력.
SELECT COALESCE(NAME, "No name")
FROM ANIMAL_INS
```