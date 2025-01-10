import styles from './RootLayout.module.scss';
import { RootLayoutProps } from './RootLayout.props';
import { Header } from '../Header/Header';

export const RootLayout: React.FC<RootLayoutProps> = ({
  children,
  ...props
}) => {
  return (
    <div className={styles['layout']} {...props}>
      <Header className={styles['header']} />
      <main className={styles['content']}>
        <div className="container">{children}</div>
      </main>
    </div>
  );
};
