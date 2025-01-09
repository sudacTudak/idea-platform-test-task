import styles from './TaskColumn.module.scss';
import cn from 'classnames';
import { TaskColumnProps } from './TaskColumn.props';
import { HeadingWithIcon } from '../HeadingWithIcon/HeadingWithIcon';
import { TaskCard } from '../TaskCard/TaskCard';
import {
  CreateTaskData,
  TaskType,
  UpdateTaskData
} from '../../types/task.types';
import { AddTaskCard } from '../AddTaskCard/AddTaskCard';
import { Column } from '../Column/Column';
import { useDrop } from 'react-dnd';
import { DRAGGABLE_ITEMS_TYPES } from '../../utils/dnd.utils';

export const TaskColumn: React.FC<TaskColumnProps> = ({
  tasks,
  tasksType,
  columnIcon,
  columnTitle,
  columnActions,
  handleEditTask,
  handleDropTask,
  className
}) => {
  const [{ isTaskOver }, dropRef] = useDrop({
    accept: DRAGGABLE_ITEMS_TYPES.TASK,
    drop: ({ taskId, taskType }: { taskId: number; taskType: TaskType }) =>
      taskType !== tasksType ? handleDropTask(taskId, tasksType) : undefined,
    collect: (monitor) => ({
      isTaskOver: !!monitor.isOver() && monitor.getItem().taskType !== tasksType
    }),
    canDrop: (item) => item.taskType !== tasksType
  });

  return (
    <Column
      columnTitle={columnTitle}
      columnIcon={columnIcon}
      columnActions={columnActions}
      ref={dropRef}
      className={cn(className, {
        [styles['task-over']]: isTaskOver
      })}
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
