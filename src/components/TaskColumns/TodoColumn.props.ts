import {
  CreateTaskData,
  GroupedTask,
  TaskType,
  UpdateTaskData
} from '../../types/task.types';

export interface TodoColumnProps {
  handleAddTask: (createdData: CreateTaskData) => void;
  handleEditTask: (taskId: number, newData: UpdateTaskData) => void;
  handleDropTask: (taskId: number, newType: TaskType) => void;
  tasks: GroupedTask<'todo'>[];
  className?: string;
}
