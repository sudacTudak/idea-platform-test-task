import { Button } from '../Button/Button';
import { TodoColumnActionsProps } from './TodoColumnActions.props';

export const TodoColumnActions: React.FC<TodoColumnActionsProps> = ({
  handleStartAddTask,
  isAddTaskMode
}) => {
  return (
    <Button onClick={handleStartAddTask} disabled={isAddTaskMode}>
      + Добавить
    </Button>
  );
};
