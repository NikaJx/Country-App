import { Routes, Route, Link } from 'react-router-dom';

import './App.css';
import AllCountries from './page/all-countries/AllCountries';
import CountryInfo from './page/country-info/CountryInfo';

const App = () => {
    return (
        <>
            <div className="header">
                <div className="container">
                    <Link to={'/'}>
                        <h5>Where in the world</h5>
                    </Link>
                </div>
            </div>
            <div className="container">
                <Routes>
                    <Route path="/" element={<AllCountries />} />
                    <Route path="/country/:countryName" element={<CountryInfo />} />
                </Routes>
            </div>
        </>
    );
};

export default App;
