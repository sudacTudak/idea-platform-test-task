export type TaskType = 'todo' | 'in_progress' | 'review' | 'done';

export interface TaskEntity {
  id: number;
  type: TaskType;
  startDay: number;
  endDay: number;
  text: string;
}

export type UpdateTaskData = Partial<Omit<TaskEntity, 'id'>>;
export type CreateTaskData = Omit<TaskEntity, 'type' | 'id'>;

export interface GroupedTask<T extends TaskType> extends TaskEntity {
  type: T;
}

export interface TaskGroups {
  todo: GroupedTask<'todo'>[];
  inProgress: GroupedTask<'in_progress'>[];
  review: GroupedTask<'review'>[];
  done: GroupedTask<'done'>[];
}
