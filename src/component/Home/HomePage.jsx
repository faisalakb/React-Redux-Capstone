import React from 'react';
import './HomePage.css';
import Search from '../Search/SearchInput';
import FilterRegion from '../Filter/FilterRegion';
import CountryDetailes from '../Country/CountryDetail/CountryDetailes';
import NavBar from '../Nav/NavBar';

const HomePage = () => (
  <>
    <NavBar />
    <Search />
    <FilterRegion />
    <CountryDetailes />

  </>
);

export default HomePage;
