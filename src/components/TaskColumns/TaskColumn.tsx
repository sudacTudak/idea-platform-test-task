import styles from './TaskColumn.module.scss';
import cn from 'classnames';
import { TaskColumnProps } from './TaskColumn.props';
import { HeadingWithIcon } from '../HeadingWithIcon/HeadingWithIcon';
import { TaskCard } from '../TaskCard/TaskCard';
import { CreateTaskData, UpdateTaskData } from '../../types/task.types';
import { AddTaskCard } from '../AddTaskCard/AddTaskCard';
import { Column } from '../Column/Column';

export const TaskColumn: React.FC<TaskColumnProps> = ({
  tasks,
  tasksType,
  columnIcon,
  columnTitle,
  columnActions,
  handleEditTask,
  className
}) => {
  return (
    <Column
      columnTitle={columnTitle}
      columnIcon={columnIcon}
      columnActions={columnActions}
      className={className}
    >
      <ul className={styles['task-list']}>
        {tasks.map((task) => (
          <li key={task.id} className={styles['task-item']}>
            <TaskCard {...task} handleEditTask={handleEditTask} />
          </li>
        ))}
      </ul>
    </Column>
  );
};
