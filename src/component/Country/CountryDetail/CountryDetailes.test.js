// In CountryDetailes.test.jsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'; // You need to wrap your component with Redux Provider
import configureStore from 'redux-mock-store'; // Use redux-mock-store for testing

import CountryDetailes from './CountryDetailes';

const mockStore = configureStore([]); // Create a mock store

describe('CountryDetailes Component', () => {
  let store;
  const initialState = {
    country: {
      data: [
        // Mock your initial store state data here
      ],
      isLoading: false,
      success: false,
      region: '',
      findCountryData: '',
    },
  };

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('should render loading text when isLoading is true', () => {
    const isLoadingState = {
      ...initialState,
      country: {
        ...initialState.country,
        isLoading: true,
      },
    };
    store = mockStore(isLoadingState);

    render(
      <Provider store={store}>
        <CountryDetailes />
      </Provider>,
    );

    expect(screen.getByText('Loading ...')).toBeInTheDocument();
  });

  it('should render countries when isLoading is false and data is available', () => {
    const dataState = {
      ...initialState,
      country: {
        ...initialState.country,
        isLoading: false,
        data: [
          // Mock country data objects here
        ],
      },
    };
    store = mockStore(dataState);

    render(
      <Provider store={store}>
        <CountryDetailes />
      </Provider>,
    );

    // Add assertions to check if countries are rendered correctly
  });

  // Add more test cases as needed
});
