import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import FilterRegion from '../component/Filter/FilterRegion';

const mockStore = configureStore([]);

describe('FilterRegion Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      countries: {
        selectedRegion: '', // Initial selected region, you can change it if needed
        regions: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'], // Mocked regions data
      },
    });
  });

  it('renders the component with default option', () => {
    render(
      <Provider store={store}>
        <FilterRegion />
      </Provider>,
    );

    const filterRegionComponent = screen.getByText('Region');
    expect(filterRegionComponent).toBeInTheDocument();
  });
});
