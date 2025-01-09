import { GroupedTask, TaskType } from '../../types/task.types';

export interface DoneColumnProps {
  handleDropTask: (taskId: number, newType: TaskType) => void;
  handleDeleteTask: (taskId: number) => void;
  handleDeleteDoneTasks: () => void;
  tasks: GroupedTask<'done'>[];
  className?: string;
}
