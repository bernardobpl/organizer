import "dotenv/config";
import { drizzle } from "drizzle-orm/mysql2";
import { sql } from "drizzle-orm";

async function dropTasksTable() {
  try {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL is not defined");
    }

    const db = drizzle(process.env.DATABASE_URL);
    
    console.log("Dropping tasks table...");
    await db.execute(sql`DROP TABLE IF EXISTS tasks;`);
    console.log("Tasks table dropped successfully!");

    process.exit(0);
  } catch (error) {
    console.error("Error dropping tasks table:", error);
    process.exit(1);
  }
}

dropTasksTable();
