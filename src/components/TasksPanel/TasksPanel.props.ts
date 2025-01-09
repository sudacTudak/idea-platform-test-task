import {
  CreateTaskData,
  TaskGroups,
  UpdateTaskData
} from '../../types/task.types';

export interface TasksPanelProps {
  addTask: (taskData: CreateTaskData) => void;
  editTask: (taskId: number, newData: UpdateTaskData) => void;
  deleteTask: (taskId: number) => void;
  deleteDoneTasks: () => void;
  taskGroups: TaskGroups;
  className?: string;
}
