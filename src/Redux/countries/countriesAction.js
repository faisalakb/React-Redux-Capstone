import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const showAllCountries = createAsyncThunk('showAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    return response.data;
  } catch (error) {
    const message = (error.response.data);
    return thunkAPI.rejectWithValue(message);
  }
});

export const searchCountry = createAsyncThunk('searchCountry', async (code, thunkAPI) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
    return response.data;
  } catch (error) {
    const message = (error.response.data);
    return thunkAPI.rejectWithValue(message);
  }
});

export const regionSelection = createAsyncThunk('regionSelection', async (region, thunkAPI) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/region/${region}`);
    return response.data;
  } catch (error) {
    const message = (error.response.data);
    return thunkAPI.rejectWithValue(message);
  }
});
