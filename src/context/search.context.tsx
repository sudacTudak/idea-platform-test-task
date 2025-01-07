import { createContext, ReactNode, useContext, useState } from 'react';

export interface ISearchContext {
  searchValue: string;
  handleChangeSearchValue: (value: string) => void;
}

const searchContext = createContext<ISearchContext | undefined>(undefined);

export const SearchContextProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <searchContext.Provider
      value={{
        searchValue,
        handleChangeSearchValue: setSearchValue
      }}
    >
      {children}
    </searchContext.Provider>
  );
};

export const useSearchContext = () => {
  const contextIsDefined = useContext(searchContext);
  if (!contextIsDefined) {
    throw new Error(
      'useSearchContext must be used within a SearchContextProvider'
    );
  }
  return contextIsDefined;
};
