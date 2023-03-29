import MyInput from '../../../UI/MyInput';
import React, { useEffect, useState } from 'react';

interface ISearchInputProps {
  searchProducts: (value: string) => void;
}

export default function SearchInput(props: ISearchInputProps) {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('search') || '');
  const { searchProducts } = props;

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    searchProducts(searchValue);
    return () => {
      localStorage.setItem('search', searchValue);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <>
      <MyInput
        type="search"
        placeholder="Search"
        className="products__search"
        value={searchValue}
        onChange={handleSearch}
      />
    </>
  );
}
