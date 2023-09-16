import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import CountryDetailes from '../component/Country/CountryDetail/CountryDetailes';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('CountryDetailes Component', () => {
  let store;

  beforeEach(() => {
    const initialState = {
      country: {
        isLoading: false, // Simulate isLoading as false
        success: true,
        region: 'Europe',
        findCountryData: '',
        data: [
          {
            id: 1,
            name: {
              common: 'Country 1',
            },
            region: 'Europe',
            capital: 'Capital 1',
            population: 1000000,
            flags: {
              png: 'flag1.png',
              alt: 'Flag 1',
            },
            cioc: 'C1',
          },
        ],
      },
    };

    store = mockStore(initialState);
  });

  it('renders country data when isLoading is false and data is available', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          {' '}
          {/* Wrap your component with BrowserRouter */}
          <CountryDetailes />
        </BrowserRouter>
      </Provider>,
    );

    // Assert that the country data is displayed
    const countryName = screen.getByText('Country 1');
    expect(countryName).toBeInTheDocument();
  });

  it('renders "No countries found." when search results are empty', () => {
    // Modify the initial state to simulate empty search results
    store.getState().country.findCountryData = 'NonExistentCountry';

    render(
      <Provider store={store}>
        <BrowserRouter>
          {' '}
          {/* Wrap your component with BrowserRouter */}
          <CountryDetailes />
        </BrowserRouter>
      </Provider>,
    );

    // Assert that the "No countries found." message is displayed
    const noCountriesMessage = screen.getByText('No countries found.');
    expect(noCountriesMessage).toBeInTheDocument();
  });

  it('renders loading message when isLoading is true', () => {
    // Modify the initial state to simulate isLoading as true
    store.getState().country.isLoading = true;

    render(
      <Provider store={store}>
        <BrowserRouter>
          <CountryDetailes />
        </BrowserRouter>
      </Provider>,
    );

    // Assert that the loading message is displayed when isLoading is true
    const loadingMessage = screen.getByText('Loading ...');
    expect(loadingMessage).toBeInTheDocument();
  });

  // Add more test cases as needed
});
