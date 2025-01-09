import styles from './TaskColumn.module.scss';

import { DoneColumnProps } from './DoneColumn.props';
import { DoneColumnActions } from '../DoneColumnActions/DoneColumnActions';
import { TaskCard } from '../TaskCard/TaskCard';
import { Column } from '../Column/Column';

import { ReactComponent as GhostIcon } from './../../assets/icons/ghost.svg';

export const DoneColumn: React.FC<DoneColumnProps> = ({
  tasks,
  handleDropTask,
  handleDeleteTask,
  handleDeleteDoneTasks,
  className
}) => {
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
      className={className}
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
