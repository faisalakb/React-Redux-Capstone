import './singleCountryInfo.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { searchCountry } from '../../../Redux/countries/countriesAction';

const SingleCountryInfo = () => {
  const dispatch = useDispatch();
  const { code } = useParams();
  const { loading, singleCountryInfo, error } = useSelector(
    (state) => state.country,
  );

  useEffect(() => {
    if (code) {
      dispatch(searchCountry(code));
    }
    if (error) {
      console.log(error);
    }
  }, [dispatch, code, error]);

  let content;

  if (loading) {
    content = <h1>Loading ...</h1>;
  } else if (singleCountryInfo[0]) {
    content = (
      <div className="imgConts">
        <img
          className="flags"
          src={singleCountryInfo[0].flags.png}
          alt={singleCountryInfo[0].flags.alt}
        />
        <div className="flagInfos">
          <h4>{singleCountryInfo[0].name.common}</h4>
          <p className="popInfos">
            <span>{singleCountryInfo[0].population}</span>
            <span className="pops">Population</span>
          </p>
        </div>
      </div>
    );
  } else {
    content = <div>No data available</div>;
  }

  return (
    <div className="sContainer">
      <Link to="/">
        <button type="button">&laquo; Back</button>
      </Link>
      <span className="cDetail">Country Details</span>
      {content}
      {singleCountryInfo[0] && (
        <div>
          <p className="sinfo">
            Region:
            <span>{singleCountryInfo[0].region}</span>
          </p>
          <p className="sinfo">
            SubRegion:
            <span>{singleCountryInfo[0].subregion}</span>
          </p>

          <p className="sinfo">
            Area:
            <span>{singleCountryInfo[0].area}</span>
          </p>

          <p className="sinfo">
            Capital:
            <span>{singleCountryInfo[0].capital}</span>
          </p>
          <h3 className="map">
            Map:
            {singleCountryInfo[0].name.common}
          </h3>
          <button
            type="button"
            className="mapBtn"
            onClick={() => window.open(singleCountryInfo[0].maps.googleMaps, '_blank')}
          >
            Open Map in New Window
          </button>
        </div>
      )}
    </div>
  );
};

export default SingleCountryInfo;
