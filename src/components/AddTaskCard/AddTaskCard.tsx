import { useState } from 'react';
import { CreateTaskData } from '../../types/task.types';
import { transformDateStrFormat } from '../../utils';
import { Card } from '../Card/Card';
import { TaskForm } from '../TaskForm/TaskForm';
import { TaskFormData } from '../TaskForm/TaskForm.types';
import { AddTaskCardProps } from './AddTaskCard.props';

export const AddTaskCard: React.FC<AddTaskCardProps> = ({
  handleAddTask,
  onCancelCreating,
  className
}) => {
  const [isEditMode, setIsEditMode] = useState(true);

  const handleFormSubmit = (data: TaskFormData) => {
    const createdData: CreateTaskData = {
      startDay: new Date(transformDateStrFormat(data.startDay)).getTime(),
      endDay: new Date(transformDateStrFormat(data.endDay)).getTime(),
      text: data.text
    };

    handleAddTask(createdData);
  };

  return (
    <Card className={className}>
      <TaskForm
        onSubmit={handleFormSubmit}
        onCancelEdit={onCancelCreating}
        isEditable
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
      />
    </Card>
  );
};
