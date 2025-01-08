import { CreateTaskData } from '../../types/task.types';

export interface AddTaskCardProps {
  handleAddTask: (taskData: CreateTaskData) => void;
  onCancelCreating: () => void;
  className?: string;
}
