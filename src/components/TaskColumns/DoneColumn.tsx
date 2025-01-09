import styles from './TaskColumn.module.scss';
import cn from 'classnames';

import { DoneColumnProps } from './DoneColumn.props';
import { DoneColumnActions } from '../DoneColumnActions/DoneColumnActions';
import { TaskCard } from '../TaskCard/TaskCard';
import { Column } from '../Column/Column';

import { ReactComponent as GhostIcon } from './../../assets/icons/ghost.svg';
import { useDrop } from 'react-dnd';
import { DRAGGABLE_ITEMS_TYPES } from '../../utils/dnd.utils';
import { TaskType } from '../../types/task.types';

export const DoneColumn: React.FC<DoneColumnProps> = ({
  tasks,
  handleDropTask,
  handleDeleteTask,
  handleDeleteDoneTasks,
  className
}) => {
  const [{ isTaskOver }, dropRef] = useDrop({
    accept: DRAGGABLE_ITEMS_TYPES.TASK,
    drop: ({ taskId, taskType }: { taskId: number; taskType: TaskType }) =>
      taskType !== 'done' ? handleDropTask(taskId, 'done') : undefined,
    collect: (monitor) => ({
      isTaskOver: !!monitor.isOver() && monitor.getItem().taskType !== 'done'
    }),
    canDrop: (item) => item.taskType !== 'done'
  });

  return (
    <Column
      columnTitle="Done"
      columnIcon={GhostIcon}
      columnActions={
        <DoneColumnActions
          handleDeleteTask={handleDeleteTask}
          handleDeleteDoneTasks={handleDeleteDoneTasks}
        />
      }
      ref={dropRef}
      className={cn(className, {
        [styles['task-over']]: isTaskOver
      })}
    >
      <ul className={styles['task-list']}>
        {tasks.map((task) => (
          <li key={task.id} className={styles['task-item']}>
            <TaskCard {...task} />
          </li>
        ))}
      </ul>
    </Column>
  );
};
