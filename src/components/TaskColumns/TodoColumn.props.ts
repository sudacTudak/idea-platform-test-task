import {
  CreateTaskData,
  GroupedTask,
  UpdateTaskData
} from '../../types/task.types';

export interface TodoColumnProps {
  handleAddTask: (createdData: CreateTaskData) => void;
  handleEditTask: (taskId: number, newData: UpdateTaskData) => void;
  tasks: GroupedTask<'todo'>[];
  className?: string;
}
