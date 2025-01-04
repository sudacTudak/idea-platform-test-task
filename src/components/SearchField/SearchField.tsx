import styles from './SearchField.module.scss';
import cn from 'classnames';
import { ChangeEvent, useState } from 'react';
import { SearchFieldProps } from './SearchField.props';
import { ReactComponent as SearchIcon } from './../../assets/icons/search.svg';

export const SearchField = ({
  value,
  onChange,
  className,
  id,
  ...props
}: SearchFieldProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <div
      className={cn(styles['search-field'], className, {
        [styles['focused']]: isFocused
      })}
    >
      <div className={styles['icon']}>
        <SearchIcon />
      </div>
      <input
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={styles['input']}
        {...props}
      />
    </div>
  );
};
