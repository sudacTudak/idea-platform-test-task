import styles from './Button.module.scss';
import cn from 'classnames';
import { ButtonProps } from './Button.props';

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button className={cn(styles['btn'], className)} {...props}>
      {children}
    </button>
  );
};
