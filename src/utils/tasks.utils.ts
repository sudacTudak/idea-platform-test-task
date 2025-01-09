import { GroupedTask, TaskEntity } from '../types/task.types';
import { checkIsRightDateFormat, transformDateStrFormat } from './date.utils';

export const sortTasksByStartDay = (tasks: TaskEntity[]) =>
  tasks.slice().sort((a, b) => a.startDay - b.startDay);

export const filterTasksBySearchQuery = (
  tasks: TaskEntity[],
  query: string
) => {
  const isDate = checkIsRightDateFormat(query);

  if (!isDate) {
    return tasks.filter((task) =>
      task.text.toLowerCase().includes(query.toLowerCase())
    );
  }

  const queryDate = new Date(transformDateStrFormat(query));
  const queryDateJoin = [
    queryDate.getDate(),
    queryDate.getMonth(),
    queryDate.getFullYear()
  ].join();

  return tasks.filter((task) => {
    const taskStartDate = new Date(task.startDay);
    const taskEndDate = new Date(task.endDay);

    const startDateJoin = [
      taskStartDate.getDate(),
      taskStartDate.getMonth(),
      taskStartDate.getFullYear()
    ].join();

    const endDateJoin = [
      taskEndDate.getDate(),
      taskEndDate.getMonth(),
      taskEndDate.getFullYear()
    ].join();

    return queryDateJoin === startDateJoin || queryDateJoin === endDateJoin;
  });
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
