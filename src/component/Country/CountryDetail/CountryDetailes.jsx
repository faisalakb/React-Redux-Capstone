import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './CountryDetailes.css';
import { showAllCountries } from '../../../feature/countries/countriesAction';

const CountryDetailes = () => {
  const [filteredData, setFilteredData] = useState([]); // Add filtered data state
  const dispatch = useDispatch();

  const {
    data, isLoading, success, region, findCountryData,
  } = useSelector((state) => state.country);

  const filterCountriesByRegion = (selectedRegion) => {
    if (selectedRegion === '') {
      setFilteredData(data); // Show all countries when no region is selected
    } else {
      const filteredCountries = data.filter((country) => country.region === selectedRegion);
      setFilteredData(filteredCountries);
    }
  };

  useEffect(() => {
    // Fetch data when the component mounts
    dispatch(showAllCountries());
  }, [dispatch]);

  useEffect(() => {
    // Update the filtered data when data or region changes
    if (success) {
      filterCountriesByRegion(region);
    }
  }, [data, success, region]);

  const searchCountry = filteredData.filter((term) => term.name.common.toLowerCase()
    .includes(findCountryData.toLowerCase()));

  return (
    <>
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <div className="container">
          {searchCountry.length > 0 ? (
            searchCountry.map((currentItem) => (
              <Link key={currentItem.id} className="imgCont" to={`/${currentItem.cioc}`}>
                <img className="flag" src={currentItem.flags.png} alt={currentItem.flags.alt} />
                <div className="flagInfo">
                  <h2>{currentItem.name.common}</h2>
                  <p>
                    <strong>    Region: </strong>
                    <span>{currentItem.region}</span>
                  </p>
                  <p>
                    <strong>    Capital:</strong>
                    <span>{currentItem.capital}</span>
                  </p>
                  <p>
                    <strong>Population:</strong>
                    <span>{currentItem.population}</span>
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <p>No countries found.</p>
          )}
        </div>
      )}
    </>
  );
};

export default CountryDetailes;
