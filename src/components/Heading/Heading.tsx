import styles from './Heading.module.scss';
import cn from 'classnames';
import { HeadingProps } from './Heading.props';

export const Heading = ({
  level = 'h2',
  className,
  children,
  ...props
}: HeadingProps) => {
  const headingClassName = cn(styles[level], className);

  if (level === 'h1') {
    return (
      <h1 className={headingClassName} {...props}>
        {children}
      </h1>
    );
  }

  if (level === 'h2') {
    return (
      <h2 className={headingClassName} {...props}>
        {children}
      </h2>
    );
  }

  return null;
};
