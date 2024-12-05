import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import { tasksTable } from '../db/schema';
import 'dotenv/config';

const seedTasks = [
  {
    title: 'Complete project documentation',
    description: 'Write comprehensive documentation for the organizer project',
    completed: false,
  },
  {
    title: 'Set up CI/CD pipeline',
    description: 'Configure GitHub Actions for automated testing and deployment',
    completed: true,
    completed_at: new Date(),
  },
  {
    title: 'Implement user authentication',
    description: 'Add JWT-based authentication system',
    completed: false,
  },
  {
    title: 'Optimize database queries',
    description: 'Review and optimize current database queries for better performance',
    completed: false,
  },
  {
    title: 'Write unit tests',
    description: 'Increase test coverage for critical components',
    completed: false,
  }
];

async function seed() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is not set');
  }

  // Create the connection
  const connection = await mysql.createConnection(process.env.DATABASE_URL);
  const db = drizzle(connection);

  console.log('🌱 Starting seeding...');

  try {
    // Insert tasks
    await db.insert(tasksTable).values(seedTasks);
    console.log('✅ Successfully seeded tasks table');
  } catch (error) {
    console.error('❌ Error seeding the database:', error);
  } finally {
    await connection.end();
  }
}

seed().catch(console.error);
