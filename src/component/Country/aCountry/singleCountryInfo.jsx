import './singleCountryInfo.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Iframe from 'react-iframe';
import { searchCountry } from '../../../feature/countries/countriesAction';
import NavBar from '../../Nav/NavBar';

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

  console.log(singleCountryInfo);

  let content;

  if (loading) {
    content = <h1>Loading ...</h1>;
  } else if (singleCountryInfo[0]) {
    content = (
      <div>
        <img src={singleCountryInfo[0].flags.png} alt={singleCountryInfo[0].flags.alt} />
        <div>
          <h2>{singleCountryInfo[0].name.common}</h2>
          <p>
            Region:
            <span>{singleCountryInfo[0].region}</span>
          </p>
          <p>
            Capital:
            <span>{singleCountryInfo[0].capital}</span>
          </p>
          <p>
            Population:
            <span>{singleCountryInfo[0].population}</span>
          </p>
          <h3 className="map">
            Map :
            {singleCountryInfo[0].name.common}
          </h3>
          <Iframe
            url={singleCountryInfo[0].maps.googleMaps}
            width="100%"
            height="450px" // You can adjust the height as needed
            id="google-map-iframe"
            display="initial"
            position="relative"
          />
        </div>
      </div>
    );
  } else {
    content = <div>No data available</div>;
  }

  return (
    <>
      <NavBar />
      <Link to="/">
        <button type="button">Back</button>
      </Link>
      {content}
    </>
  );
};

export default SingleCountryInfo;
