import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from './component/Nav/NavBar';
import HomePage from './component/Home/HomePage';
import CountryDetail from './component/Country/aCountry/singleCountryInfo';
import store from './app/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route index element={<HomePage />} />
        <Route path=":code" element={<CountryDetail />} />
      </Routes>
    </Provider>
  );
}

export default App;
