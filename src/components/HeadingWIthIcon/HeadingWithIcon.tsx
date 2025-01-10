import styles from './HeadingWithIcon.module.scss';
import cn from 'classnames';
import { Heading } from '../Heading/Heading';
import { HeadingWithIconProps } from './HeadingWithIcon.props';

export const HeadingWithIcon = ({
  className,
  icon: Icon,
  children,
  ...props
}: HeadingWithIconProps) => {
  return (
    <div className={cn(styles['heading'], className)}>
      <div className={styles['icon']}>
        <Icon />
      </div>
      <Heading level="h2" {...props}>
        {children}
      </Heading>
    </div>
  );
};
