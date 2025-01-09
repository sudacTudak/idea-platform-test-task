import { ReactNode } from 'react';
import { ReactSVGIcon } from '../../types/svg.types';
import { TaskEntity, TaskType, UpdateTaskData } from '../../types/task.types';

export interface TaskColumnProps {
  tasks: TaskEntity[];
  tasksType: TaskType;
  columnTitle: string;
  columnIcon: ReactSVGIcon;
  columnActions?: ReactNode;
  handleEditTask?: (taskId: number, newData: UpdateTaskData) => void;
  handleDropTask: (taskId: number, newType: TaskType) => void;
  className?: string;
}
