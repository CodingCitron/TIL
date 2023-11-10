[postgresql 트리거를 배워보자](https://jaeone94.github.io/posts/Postgresql-%ED%8A%B8%EB%A6%AC%EA%B1%B0%EB%A5%BC-%EB%B0%B0%EC%9B%8C%EB%B3%B4%EC%9E%90/)

```sql
CREATE TABLE "ps_counters_history"
(
  "id" serial PRIMARY KEY,
  "timestamp" timestamp NOT NULL DEFAULT clock_timestamp(),
  "psid" integer NOT NULL,
  "counter" bigint[] NOT NULL
);

CREATE OR REPLACE FUNCTION ps_counters_history_trigger()
  RETURNS trigger AS
$BODY$
  DECLARE
    table_name text;
  BEGIN
    table_name := 'ps_counters_history_' || to_char(CURRENT_DATE, 'yyyy_mm');
    IF NOT EXISTS (SELECT 1 FROM pg_class WHERE relname = table_name)
    THEN
      EXECUTE 'CREATE TABLE IF NOT EXISTS ' || table_name ||
              ' () INHERITS (ps_counters_history);';
    END IF;
    EXECUTE 'INSERT INTO ' || table_name ||
            '(psid, counter) VALUES ($1.psid, $1.counter);' USING NEW;
    RETURN NEW;
  END
$BODY$
  LANGUAGE plpgsql;

CREATE TRIGGER ps_counters_history_trigger
AFTER INSERT OR UPDATE ON ps_counters FOR EACH ROW
EXECUTE PROCEDURE ps_counters_history_trigger();
```