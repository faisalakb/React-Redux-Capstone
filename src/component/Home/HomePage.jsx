import React from 'react';
import FilterRegion from '../Filter/FilterRegion';
import CountryDetailes from '../Country/CountryDetail/CountryDetailes';
import NavBar from '../Nav/NavBar';
import './HomePage.css';

const HomePage = () => (
  <>
    <div className="homeContainer">
      <NavBar />
      <FilterRegion />
      <CountryDetailes />
    </div>

  </>
);

export default HomePage;
