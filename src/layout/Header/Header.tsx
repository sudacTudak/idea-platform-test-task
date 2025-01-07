import styles from './Header.module.scss';
import cn from 'classnames';
import { HeaderProps } from './Header.props';
import { Heading } from '../../components/Heading/Heading';
import { SearchField } from '../SearchField/SearchField';
import { useSearchContext } from '../../context/search.context';

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const { searchValue, handleChangeSearchValue } = useSearchContext();

  return (
    <header className={cn(styles['header'], className)}>
      <div className={cn('container', styles['header-container'])}>
        <Heading level="h1">Your tasks</Heading>
        <SearchField
          value={searchValue}
          onChange={handleChangeSearchValue}
          className={styles['search']}
        />
      </div>
    </header>
  );
};
