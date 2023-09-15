import { createSlice } from '@reduxjs/toolkit';
import { searchCountry, showAllCountries, regionSelection } from './countriesAction';

const initialState = {
  isLoading: false,
  data: [],
  singleCountryInfo: [],
  isError: false,
  success: false,
  message: '',
  region: '',
  findCountryData: '',
};

export const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    defaultState: (state) => {
      state.isLoading = false;
      state.success = false;
      state.isError = false;
      state.message = '';
    },
    setRegion: (state, action) => {
      state.region = action.payload;
    },
    findCountryName: (state, action) => {
      state.findCountryData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(showAllCountries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(showAllCountries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.success = true;
      })
      .addCase(showAllCountries.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.data = [];
      })
      .addCase(searchCountry.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchCountry.fulfilled, (state, action) => {
        state.isLoading = false;
        state.singleCountryInfo = action.payload;
        state.success = true;
      })
      .addCase(searchCountry.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.singleCountryInfo = [];
      })
      .addCase(regionSelection.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(regionSelection.fulfilled, (state, action) => {
        state.isLoading = false;
        state.region = action.payload;
        state.success = true;
      })
      .addCase(regionSelection.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.region = [];
      });
  },

});

export default countrySlice.reducer;
export const { defaultState, setRegion, findCountryName } = countrySlice.actions;
