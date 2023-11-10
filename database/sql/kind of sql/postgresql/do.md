# DO
Greenplum/Postgresql를 이용하여 Function을 개발/테스트할때 Function 문법/기능을 확인하고 싶을때 이런 상황에서 사용하는 것이 DO기능

[DO 공식](https://www.postgresql.org/docs/9.4/sql-do.html)

1. RAISE NOTICE를 이용하여 DBeaver Output 표시 
```sql
do $$
begin
    raise notice 'NOW : %', current_timestamp; 
end $$
```

2. RECORD를 이용한 테이블 목록 표시
```SQL
DO $$
DECLARE r record;
BEGIN
    FOR r IN 
        SELECT table_schema, table_name
          FROM information_schema.tables
         LIMIT 100
    LOOP
        RAISE NOTICE 'SchemaName : %, TableName : %', r.table_schema, r.table_name;
    END LOOP;
END$$;
```

참조
- https://wylee-developer.tistory.com/59