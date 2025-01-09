import styles from './DoneColumnActions.module.scss';
import cn from 'classnames';
import { IconButton } from '../IconButton/IconButton';
import { DoneColumnActionsProps } from './DoneColumnActions.props';

import { ReactComponent as TrashIcon } from './../../assets/icons/trash.svg';
import { useDrop } from 'react-dnd';
import { DRAGGABLE_ITEMS_TYPES } from '../../utils/dnd.utils';

export const DoneColumnActions: React.FC<DoneColumnActionsProps> = ({
  handleDeleteDoneTasks,
  handleDeleteTask,
  className
}) => {
  const [{ isTaskOver }, dropRef] = useDrop(() => ({
    accept: DRAGGABLE_ITEMS_TYPES.TASK,
    drop: ({ taskId }: { taskId: number }) => handleDeleteTask(taskId),
    collect: (monitor) => ({
      isTaskOver: !!monitor.isOver()
    })
  }));

  return (
    <IconButton
      icon={TrashIcon}
      variant={'text'}
      onClick={handleDeleteDoneTasks}
      ref={dropRef}
      className={cn(className, {
        [styles['task-over']]: isTaskOver
      })}
    />
  );
};
