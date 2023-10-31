import { useAppDispatch } from '../hooks/useTypeHooks';
import { filterCountry } from '../redux/countryApi/countrySlice';

const FilterCountry = () => {
    const dispatch = useAppDispatch();

    const handleFilterCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const regionName = e.target.value;

        dispatch(filterCountry(regionName));
    };

    return (
        <select onChange={handleFilterCountry}>
            <option className="option">Filter by Region</option>
            <option className="option" value="Africa">
                Africa
            </option>
            <option className="option" value="America">
                America
            </option>
            <option className="option" value="Asia">
                Asia
            </option>
            <option className="option" value="Europe">
                Europe
            </option>
            <option className="option" value="Oceania">
                Oceania
            </option>
        </select>
    );
};

export default FilterCountry;
