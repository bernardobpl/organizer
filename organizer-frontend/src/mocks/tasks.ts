import { faker } from '@faker-js/faker';
import { TaskT } from '../types/task';

export const createMockTask = (): TaskT => ({
  id: faker.number.int(),
  title: faker.lorem.words({ min: 1, max: 3 }),
  completed: false,
  description: faker.lorem.sentence(),
  createdAt: faker.date.past().toISOString(),
  completedAt: faker.date.past().toISOString(),
});

export const mocktTasks = faker.helpers.multiple(createMockTask, {
  count: 5,
});