# IF
--IF 사용법--
IF 조건 참일때 값 ELSE 거짓일때 값 END 컬럼명

```sql
-- if (조건문, 참 값, 거짓 값)

SELECT IF(required, '필수', '선택') as '필수여부' FROM table

SELECT A.seq, IF(A.seq <= 3, 'A', 'B') as result FROM table 
```