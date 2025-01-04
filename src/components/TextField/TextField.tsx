import styles from './TextField.module.scss';
import cn from 'classnames';
import { TextFieldProps } from './TextField.props';
import { ChangeEvent } from 'react';

export const TextField = ({
  value,
  onChange,
  className,
  ...props
}: TextFieldProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <input
      className={cn(styles['field'], className)}
      value={value}
      onChange={handleChange}
      {...props}
    />
  );
};
