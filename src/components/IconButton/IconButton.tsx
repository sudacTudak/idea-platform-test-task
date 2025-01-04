import styles from './IconButton.module.scss';
import cn from 'classnames';
import { IconButtonProps } from './IconButton.props';

export const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  variant = 'contained',
  appearance = 'standard',
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        styles['btn'],
        styles[`btn-${variant}`],
        styles[`btn-${appearance}`],
        className
      )}
      {...props}
    >
      <span className={styles['icon']}>
        <Icon />
      </span>
    </button>
  );
};
