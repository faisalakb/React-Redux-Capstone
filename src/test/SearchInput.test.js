import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SearchInput from '../component/Search/SearchInput';
import { findCountryName } from '../Redux/countries/countriesSlice';

const mockStore = configureStore([]);

describe('SearchInput Component', () => {
  it('dispatches findCountryName action on input change', () => {
    const store = mockStore({
      country: {
        findCountryData: '', // Initial search input value
      },
    });

    render(
      <Provider store={store}>
        <SearchInput />
      </Provider>,
    );

    const inputElement = screen.getByPlaceholderText('Search..');
    fireEvent.change(inputElement, { target: { value: 'USA' } });
    const actions = store.getActions();
    expect(actions).toContainEqual(findCountryName('USA'));
  });
});
