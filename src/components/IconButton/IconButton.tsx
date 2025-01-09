import styles from './IconButton.module.scss';
import cn from 'classnames';
import { IconButtonProps } from './IconButton.props';
import { forwardRef } from 'react';

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon: Icon,
      variant = 'contained',
      appearance = 'standard',
      children,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
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
  }
);
