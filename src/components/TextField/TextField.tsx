import styles from './TextField.module.scss';
import cn from 'classnames';
import { TextFieldProps } from './TextField.props';
import { forwardRef } from 'react';

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, ...props }, ref) => {
    return (
      <input ref={ref} className={cn(styles['field'], className)} {...props} />
    );
  }
);
