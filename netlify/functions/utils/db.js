import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // Required for Railway
});

// Set Lebanon timezone for all connections
pool.on("connect", (client) => {
  client.query(`SET TIMEZONE='Asia/Beirut'`);
});

export default pool;
