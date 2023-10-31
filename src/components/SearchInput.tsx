import { useState } from 'react';
import { useAppDispatch } from '../hooks/useTypeHooks';
import { searchCountry } from '../redux/countryApi/countrySlice';

const SearchInput = () => {
    const [term, setTerm] = useState<string>('');
    const dispatch = useAppDispatch();

    const handleSearchCountry = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();

        dispatch(searchCountry(term));
    };

    return (
        <form onSubmit={handleSearchCountry}>
            <input
                type="text"
                placeholder="Search a country"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
            />
        </form>
    );
};

export default SearchInput;
