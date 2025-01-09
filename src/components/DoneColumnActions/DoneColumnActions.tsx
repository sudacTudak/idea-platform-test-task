import { IconButton } from '../IconButton/IconButton';
import { DoneColumnActionsProps } from './DoneColumnActions.props';

import { ReactComponent as TrashIcon } from './../../assets/icons/trash.svg';

export const DoneColumnActions: React.FC<DoneColumnActionsProps> = ({
  handleDeleteDoneTasks,
  handleDeleteTask,
  className
}) => {
  return (
    <IconButton
      icon={TrashIcon}
      variant="text"
      onClick={handleDeleteDoneTasks}
      className={className}
    />
  );
};
