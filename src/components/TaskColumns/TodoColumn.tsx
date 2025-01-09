import styles from './TaskColumn.module.scss';

import { TodoColumnProps } from './TodoColumn.props';

import { ReactComponent as HappyAltIcon } from './../../assets/icons/happy-alt.svg';
import { TaskCard } from '../TaskCard/TaskCard';
import { useState } from 'react';
import { Column } from '../Column/Column';
import { AddTaskCard } from '../AddTaskCard/AddTaskCard';
import { TodoColumnActions } from '../TodoColumnActions/TodoColumnActions';
import { CreateTaskData } from '../../types/task.types';

export const TodoColumn: React.FC<TodoColumnProps> = ({
  tasks,
  handleAddTask,
  handleEditTask,
  className
}) => {
  const [isAddTaskMode, setIsAddTaskMode] = useState<boolean>(false);

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
      className={className}
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
