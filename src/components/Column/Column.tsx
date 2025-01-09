import styles from './Column.module.scss';
import cn from 'classnames';
import { ColumnProps } from './Column.props';
import { HeadingWithIcon } from '../HeadingWithIcon/HeadingWithIcon';

export const Column: React.FC<ColumnProps> = ({
  columnIcon,
  columnTitle,
  columnActions,
  children,
  className
}) => {
  return (
    <div className={cn(styles['column'], className)}>
      <div className={styles['header']}>
        <HeadingWithIcon icon={columnIcon}>{columnTitle}</HeadingWithIcon>
        {columnActions && (
          <div className={styles['actions']}>{columnActions}</div>
        )}
      </div>
      <div className={styles['body']}>{children}</div>
    </div>
  );
};
