import { boolean, mysqlTable, serial, text, timestamp, varchar } from 'drizzle-orm/mysql-core';

export const tasksTable = mysqlTable('tasks', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description'),
  completed: boolean('completed').default(false),
  completed_at: timestamp('completed_at'),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow().onUpdateNow(),
});
