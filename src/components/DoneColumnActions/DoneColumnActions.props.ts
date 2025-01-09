export interface DoneColumnActionsProps {
  handleDeleteTask: (taskId: number) => void;
  handleDeleteDoneTasks: () => void;
  className?: string;
}
