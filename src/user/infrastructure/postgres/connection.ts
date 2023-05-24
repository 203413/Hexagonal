import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "greggrulzok",
  database: "dbprueba",
  port: 5432,
});
