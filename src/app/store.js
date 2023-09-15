import { configureStore } from '@reduxjs/toolkit';
import countryReducer from '../feature/countries/countriesSlice';

const store = configureStore({
  reducer: {
    country: countryReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
