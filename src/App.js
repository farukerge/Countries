import Header from './Components/Header/Header';
import GetCountry from './Components/GetCountry/GetCountry';
import { Route, Routes } from 'react-router-dom'
import CountryDetails from './Components/CountryDetails/CountryDetails';

function App(country) {

      
  return (
    <>
      <Header />
    <Routes>
      <Route path="/" element={<GetCountry country={country} />} />
      <Route path="/country/:countryName" element={<CountryDetails />} />
    </Routes>
     
    </>
  );
}

export default App;
