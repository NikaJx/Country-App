import { useAppDispatch, useAppSelector } from '../../hooks/useTypeHooks';
import { useEffect } from 'react';

import CountryCard from '../../components/CountryCard';
import SearchInput from '../../components/SearchInput';
import { getAllCountrys } from '../../redux/countryApi/countrySlice';
import FilterCountry from '../../components/FilterCountry';

const AllCountries = () => {
    const dispatch = useAppDispatch();

    const { countrys, error, isLoading } = useAppSelector((state) => state.country);

    useEffect(() => {
        dispatch(getAllCountrys());
    }, []);

    return (
        <div className="all__country_wrapper">
            <div className="country__top">
                <div className="search">
                    <SearchInput />
                </div>
                <div className="filter">
                    <FilterCountry />
                </div>
            </div>
            <div className="loading-error">
                {isLoading && !error && <h4 className="loading">Loading...</h4>}
                {error && !isLoading && <h4>Error...</h4>}
            </div>
            <div className="country__bottom">
                {countrys?.map((country) => (
                    <CountryCard key={country.cca2} country={country} />
                ))}
            </div>
        </div>
    );
};

export default AllCountries;
