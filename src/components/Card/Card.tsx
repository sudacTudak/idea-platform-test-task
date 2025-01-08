import styles from './Card.module.scss';
import cn from 'classnames';
import { CardProps } from './Card.props';

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return <div className={cn(styles['card'], className)}>{children}</div>;
};
