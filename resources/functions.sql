CREATE OR REPLACE FUNCTION first_day(timestamp with time zone) RETURNS timestamp with time zone
AS $$
    SELECT 
        CAST(((R.DATE - R.DIAS) + 1 || ' ' || R.HOURS) AS timestamp with time zone)
    FROM (
        SELECT 
            R.DATA::DATE AS "date",
            R.DATA::TIME AS HOURS,
            DATE_PART('DAY', R.DATA::DATE)::INT AS DIAS
        FROM (
            SELECT 
            cast($1 as timestamp with time zone) AS DATA
        ) AS R
    ) AS R
$$
LANGUAGE SQL;


CREATE OR REPLACE FUNCTION last_day(timestamp with time zone) RETURNS timestamp with time zone
AS $$
    SELECT 
        CAST((R.DATE - 1 || ' ' || R.HOURS) AS timestamp with time zone)
    FROM (
        SELECT 
            first_day(R.DATA::DATE + INTERVAL '1 MONTH')::DATE AS "date",
            R.DATA::TIME AS HOURS
        FROM (
            SELECT 
            cast($1 as timestamp with time zone) AS DATA
        ) AS R
    ) AS R
$$
LANGUAGE SQL;