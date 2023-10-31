import { ICountry } from '../models/country.type';
import { Link } from 'react-router-dom';

interface IProps {
    country: ICountry;
}

const CountryCard: React.FC<IProps> = ({ country }) => {
    return (
        <Link to={`/country/${country.name.common}`}>
            <div className="country__card">
                <div className="country__img">
                    <img src={country.flags.png} alt="" />
                </div>
                <div className="country__data">
                    <h3>{country.name.common}</h3>
                    <h6>Population: {country.population}</h6>
                    <h6>Region: {country.region}</h6>
                    <h6>Capital: {country.capital}</h6>
                </div>
            </div>
        </Link>
    );
};

export default CountryCard;
