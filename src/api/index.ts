import { TaskEntity } from '../types/task.types';

export const getTasks = async () => {
  try {
    const res = await fetch('./data/tasks.json');
    const data = res.json() as unknown as TaskEntity[];

    return data;
  } catch (err) {
    if (err instanceof Error) {
      throw err;
    }
  }
};
