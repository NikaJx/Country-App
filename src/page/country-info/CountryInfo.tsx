import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { singleCountry } from '../../redux/countryApi/countrySlice';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypeHooks';

const CountryInfo = () => {
    const dispatch = useAppDispatch();
    const { countryName } = useParams();

    const { singlePageCountry, error, isLoading } = useAppSelector((state) => state.country);

    useEffect(() => {
        dispatch(singleCountry(countryName));
    }, [countryName]);

    return (
        <div className="country__info_wrapper">
            <button>
                <Link to={'/'}>Back</Link>
            </button>

            {isLoading && !error && <h4>Loading...</h4>}

            {singlePageCountry &&
                singlePageCountry?.map((country, i) => (
                    <div className="country__info_container" key={i}>
                        <div className="country__info-img">
                            <img src={country.flags.png} alt="" />
                        </div>
                        <div className="country__info">
                            <h3>{country.name.common}</h3>
                            <div className="country__info-left">
                                <h5>
                                    Population: <span>{country.population}</span>
                                </h5>
                                <h5>
                                    Region: <span>{country.region}</span>
                                </h5>
                                <h5>
                                    Sub Region: <span>{country.subregion}</span>
                                </h5>
                                <h5>
                                    Capital: <span>{country.capital}</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default CountryInfo;
