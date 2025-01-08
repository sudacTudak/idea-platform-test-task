import { TaskType, UpdateTaskData } from '../../types/task.types';

export interface TaskCardProps {
  id: number;
  type: TaskType;
  startDay: number;
  endDay: number;
  text: string;
  handleEditTask?: (taskId: number, newData: UpdateTaskData) => void;
  className?: string;
}
