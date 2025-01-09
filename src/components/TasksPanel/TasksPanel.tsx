import styles from './TasksPanel.module.scss';
import cn from 'classnames';

import { TaskColumn } from '../TaskColumns/TaskColumn';
import { TodoColumn } from '../TaskColumns/TodoColumn';
import { DoneColumn } from '../TaskColumns/DoneColumn';

import { TaskType } from '../../types/task.types';
import { TasksPanelProps } from './TasksPanel.props';

import { ReactComponent as SmileIcon } from './../../assets/icons/smile.svg';
import { ReactComponent as SmileUpsideDownIcon } from './../../assets/icons/smile-upside-down.svg';

export const TasksPanel: React.FC<TasksPanelProps> = ({
  addTask,
  deleteDoneTasks,
  deleteTask,
  editTask,
  taskGroups,
  className
}) => {
  const handleDropTask = (taskId: number, newType: TaskType) =>
    editTask(taskId, { type: newType });

  return (
    <div className={cn(styles['panel'], className)}>
      <TodoColumn
        tasks={taskGroups.todo}
        handleAddTask={addTask}
        handleEditTask={editTask}
        className={styles['column']}
      />
      <TaskColumn
        columnTitle="In Progress"
        columnIcon={SmileIcon}
        tasks={taskGroups.inProgress}
        tasksType="in_progress"
        handleDropTask={handleDropTask}
        className={styles['column']}
      />
      <TaskColumn
        columnTitle="Review"
        columnIcon={SmileUpsideDownIcon}
        tasks={taskGroups.review}
        tasksType="review"
        handleDropTask={handleDropTask}
        className={styles['column']}
      />
      <DoneColumn
        tasks={taskGroups.done}
        handleDeleteTask={deleteTask}
        handleDeleteDoneTasks={deleteDoneTasks}
        handleDropTask={handleDropTask}
        className={styles['column']}
      />
    </div>
  );
};
