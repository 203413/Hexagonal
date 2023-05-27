import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "db-test-instance-pls-ignore.c3sf0mwmifqf.us-east-1.rds.amazonaws.com",
  password: "greggrulzok",
  database: "dbprueba",
  port: 5432,
});
