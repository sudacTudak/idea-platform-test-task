import styles from './TaskColumn.module.scss';
import cn from 'classnames';

import { TodoColumnProps } from './TodoColumn.props';

import { ReactComponent as HappyAltIcon } from './../../assets/icons/happy-alt.svg';
import { TaskCard } from '../TaskCard/TaskCard';
import { useState } from 'react';
import { Column } from '../Column/Column';
import { AddTaskCard } from '../AddTaskCard/AddTaskCard';
import { TodoColumnActions } from '../TodoColumnActions/TodoColumnActions';
import { CreateTaskData, TaskType } from '../../types/task.types';
import { useDrop } from 'react-dnd';
import { DRAGGABLE_ITEMS_TYPES } from '../../utils/dnd.utils';

export const TodoColumn: React.FC<TodoColumnProps> = ({
  tasks,
  handleAddTask,
  handleEditTask,
  handleDropTask,
  className
}) => {
  const [isAddTaskMode, setIsAddTaskMode] = useState<boolean>(false);

  const [{ isTaskOver }, dropRef] = useDrop({
    accept: DRAGGABLE_ITEMS_TYPES.TASK,
    drop: ({ taskId, taskType }: { taskId: number; taskType: TaskType }) =>
      taskType !== 'todo' ? handleDropTask(taskId, 'todo') : undefined,
    collect: (monitor) => ({
      isTaskOver: !!monitor.isOver() && monitor.getItem().taskType !== 'todo'
    }),
    canDrop: (item) => item.taskType !== 'todo'
  });

  const cancelCreatingTaskHandler = () => {
    setIsAddTaskMode(false);
  };

  const addTaskHandler = (taskData: CreateTaskData) => {
    handleAddTask(taskData);
    setIsAddTaskMode(false);
  };

  return (
    <Column
      columnTitle={'To Do'}
      columnIcon={HappyAltIcon}
      columnActions={
        <TodoColumnActions
          handleStartAddTask={() => setIsAddTaskMode(true)}
          isAddTaskMode={isAddTaskMode}
        />
      }
      ref={dropRef}
      className={cn(className, {
        [styles['task-over']]: isTaskOver
      })}
    >
      <ul className={styles['task-list']}>
        {isAddTaskMode && (
          <AddTaskCard
            handleAddTask={addTaskHandler}
            onCancelCreating={cancelCreatingTaskHandler}
            className={styles['task-item']}
          />
        )}
        {tasks.map((task) => (
          <li key={task.id} className={styles['task-item']}>
            <TaskCard {...task} handleEditTask={handleEditTask} />
          </li>
        ))}
      </ul>
    </Column>
  );
};
