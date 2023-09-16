import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Search from '../../Search/SearchInput';
import './CountryDetailes.css';
import { showAllCountries } from '../../../Redux/countries/countriesAction';

const CountryDetailes = () => {
  const [filteredData, setFilteredData] = useState([]);
  const dispatch = useDispatch();

  const {
    data, isLoading, success, region, findCountryData,
  } = useSelector((state) => state.country);

  const filterCountriesByRegion = (selectedRegion) => {
    if (selectedRegion === '') {
      setFilteredData(data);
    } else {
      const filteredCountries = data.filter((country) => country.region === selectedRegion);
      setFilteredData(filteredCountries);
    }
  };

  useEffect(() => {
    dispatch(showAllCountries());
  }, [dispatch]);

  useEffect(() => {
    if (success) {
      filterCountriesByRegion(region);
    }
  }, [data, success, region]);

  const searchCountry = filteredData.filter((term) => term.name.common.toLowerCase()
    .includes(findCountryData.toLowerCase()));

  // Get a random country from the filtered list
  const randomCountryIndex = Math.floor(Math.random() * searchCountry.length);
  const randomCountry = searchCountry[randomCountryIndex];

  // Remove the random country from the list
  const remainingCountries = [...searchCountry];
  remainingCountries.splice(randomCountryIndex, 1);

  return (
    <>
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <div className="container">
          {randomCountry && (
            <Link className="imgCont" to={`/${randomCountry.cioc}`}>
              <img className="flag" src={randomCountry.flags.png} alt={randomCountry.flags.alt} />
              <div className="flagInfo">
                <h4 className="cName">{randomCountry.name.common}</h4>
                <p className="popInfo">
                  <span>{randomCountry.population}</span>
                  <span className="pop">Population</span>
                </p>
              </div>
            </Link>
          )}
          <Search />
          {/* Display the remaining countries in a two-column layout */}
          <div className="container">
            <div className="two-column">
              {remainingCountries.length > 0 ? (
                remainingCountries.map((currentItem) => (
                  <Link key={currentItem.id} className="imgCont1" to={`/${currentItem.cioc}`}>
                    <img className="flag" src={currentItem.flags.png} alt={currentItem.flags.alt} />
                    <div className="flagInfo1">
                      <p className="arrow">&#x279C;</p>
                      <h4 className="cName">{currentItem.name.common}</h4>
                      <div className="popInfo">
                        <p className="pop">
                          <span>{currentItem.population}</span>
                          <div>Population</div>
                        </p>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <p>No countries found.</p>
              )}
            </div>
          </div>

        </div>
      )}
    </>
  );
};

export default CountryDetailes;
