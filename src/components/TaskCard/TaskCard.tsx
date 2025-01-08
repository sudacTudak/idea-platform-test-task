import { TaskCardProps } from './TaskCard.props';

import { Card } from '../Card/Card';
import { TaskFormData } from '../TaskForm/TaskForm.types';
import { TaskForm } from '../TaskForm/TaskForm';
import { UpdateTaskData } from '../../types/task.types';
import { transformDateStrFormat } from '../../utils';

export const TaskCard: React.FC<TaskCardProps> = ({
  id,
  startDay,
  endDay,
  text,
  type,
  handleEditTask,
  className
}) => {
  const isOverdue = endDay < Date.now() && type !== 'done';

  const onFormSubmit = (data: TaskFormData) => {
    if (!handleEditTask) {
      return;
    }

    const updatedData: UpdateTaskData = {
      startDay: new Date(transformDateStrFormat(data.startDay)).getTime(),
      endDay: new Date(transformDateStrFormat(data.endDay)).getTime(),
      text: data.text
    };
    handleEditTask(id, updatedData);
  };

  return (
    <Card className={className}>
      <TaskForm
        isTaskOverdue={isOverdue}
        formValues={{
          startDay: new Date(startDay).toLocaleDateString(),
          endDay: new Date(endDay).toLocaleDateString(),
          text
        }}
        isEditable={type === 'todo'}
        onSubmit={type === 'todo' && handleEditTask ? onFormSubmit : undefined}
      />
    </Card>
  );
};
