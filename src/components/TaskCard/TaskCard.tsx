import styles from './TaskCard.module.scss';
import cn from 'classnames';

import { TaskCardProps } from './TaskCard.props';

import { Card } from '../Card/Card';
import { TaskFormData } from '../TaskForm/TaskForm.types';
import { TaskForm } from '../TaskForm/TaskForm';
import { UpdateTaskData } from '../../types/task.types';
import { transformDateStrFormat } from '../../utils/date.utils';
import { useDrag } from 'react-dnd';
import { DRAGGABLE_ITEMS_TYPES } from '../../utils/dnd.utils';
import { useState } from 'react';

export const TaskCard: React.FC<TaskCardProps> = ({
  id,
  startDay,
  endDay,
  text,
  type,
  handleEditTask,
  className
}) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const isOverdue = endDay < Date.now() && type !== 'done';

  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: DRAGGABLE_ITEMS_TYPES.TASK,
      item: { taskId: id, taskType: type },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging()
      }),
      canDrag: () => !isEditMode
    }),
    [isEditMode]
  );

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
    <Card
      className={cn(className, {
        [styles['dragging']]: isDragging
      })}
      ref={dragRef}
    >
      <TaskForm
        isTaskOverdue={isOverdue}
        formValues={{
          startDay: new Date(startDay).toLocaleDateString(),
          endDay: new Date(endDay).toLocaleDateString(),
          text
        }}
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
        isEditable={type === 'todo'}
        onSubmit={type === 'todo' && handleEditTask ? onFormSubmit : undefined}
      />
    </Card>
  );
};
