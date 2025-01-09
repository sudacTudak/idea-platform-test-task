import styles from './TextareaField.module.scss';
import cn from 'classnames';
import { forwardRef } from 'react';
import { TextareaFieldProps } from './TextareaField.props';

export const TextareaField = forwardRef<
  HTMLTextAreaElement,
  TextareaFieldProps
>(({ className, disabled, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(styles['textarea'], className)}
      disabled={disabled}
      {...props}
    />
  );
});
