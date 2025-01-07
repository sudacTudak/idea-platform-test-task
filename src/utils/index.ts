import { GroupedTask, TaskEntity } from '../types/task.types';

export const sortTasksByStartDay = (tasks: TaskEntity[]) =>
  tasks.slice().sort((a, b) => a.startDay - b.startDay);

export const filterTasksBySearchQuery = (
  tasks: TaskEntity[],
  query: string
) => {
  const isDate = /^\d{2}\.\d{2}\.\d{4}$/.test(query);

  if (!isDate) {
    return tasks.filter((task) =>
      task.text.toLowerCase().includes(query.toLowerCase())
    );
  }

  const queryDate = new Date(query.split('.').reverse().join('-')).getTime();
  return tasks.filter(
    (task) => task.startDay === queryDate || task.endDay === queryDate
  );
};

export const groupTasksByType = (tasks: TaskEntity[]) => ({
  todo: tasks.filter((task) => task.type === 'todo') as GroupedTask<'todo'>[],
  inProgress: tasks.filter(
    (task) => task.type === 'in_progress'
  ) as GroupedTask<'in_progress'>[],
  review: tasks.filter(
    (task) => task.type === 'review'
  ) as GroupedTask<'review'>[],
  done: tasks.filter((task) => task.type === 'done') as GroupedTask<'done'>[]
});
