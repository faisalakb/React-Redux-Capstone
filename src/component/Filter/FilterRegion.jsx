import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setRegion } from '../../Redux/countries/countriesSlice';
import './FilterRegion.css';

const FilterRegion = () => {
  const [regionData, setRegionData] = useState([]);
  const [filter, setFilterRegion] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const regions = [...new Set(response.data.map((country) => country.region))];
        setRegionData(regions);
      } catch (error) {
        console.error('Error fetching region data:', error);
      }
    };
    fetchData();
  }, []);

  const handleRegionChange = (e) => {
    const selectedRegion = e.target.value;
    setFilterRegion(selectedRegion);
    dispatch(setRegion(selectedRegion));
  };

  return (
    <div className="regionContainer">
      <select
        className="dropdown-content"
        value={filter}
        onChange={handleRegionChange}
      >
        <option value="">Region</option>
        {regionData.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterRegion;
