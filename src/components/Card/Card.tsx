import styles from './Card.module.scss';
import cn from 'classnames';
import { CardProps } from './Card.props';
import { forwardRef } from 'react';

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className }, ref) => {
    return (
      <div ref={ref} className={cn(styles['card'], className)}>
        {children}
      </div>
    );
  }
);
