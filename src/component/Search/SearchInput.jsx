import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findCountryName } from '../../Redux/countries/countriesSlice';
import './SearchInput.css';

const SearchInput = () => {
  const { findCountryData } = useSelector((state) => state.country);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(findCountryName(e.target.value));
  };
  return (
    <>
      <input className="inp" type="text" placeholder="Search.." value={findCountryData} onChange={handleSearch} />
    </>
  );
};

export default SearchInput;
