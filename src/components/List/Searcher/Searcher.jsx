import { useState } from 'react';
import debounce from 'lodash.debounce';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useUpdateList } from 'hooks/useUpdateList';
import { useRunNavigate } from 'hooks/useRunNavigate';

// https://www.freecodecamp.org/news/debounce-and-throttle-in-react-with-hooks/
export const ListSearcher = ({ theme, setListCountries, initialCountries }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );
    const [ term, setTerm ] = useState( q );

    useRunNavigate( term.trim(), 'q' );
    useUpdateList( q, initialCountries, setListCountries );

    const handleInputChange = e => {
        // FALTA AGREGAR EL DEBOUNCE.
        const value = e.target.value.toLowerCase();
        setTerm( value );
        // const debouncedSave = debounce(() => saveToDb(nextValue), 1000);
		// debouncedSave();
    }

    return (
        <input
            className="form-control form-control-lg animate__animated animate__bounceIn animate__faster"
            type="text"
            placeholder="Buscar aquí..." 
            value={ term }
            onChange={ handleInputChange }
            style={{ backgroundColor: 'transparent' }}
        />
    );

}
