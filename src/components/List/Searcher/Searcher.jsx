import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useUpdateList } from 'hooks/useUpdateList';
import { useRunNavigate } from 'hooks/useRunNavigate';
// import debounce from 'lodash.debounce';

export const ListSearcher = ({ theme, setListCountries, initialCountries }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );
    const [ term, setTerm ] = useState( q );

    useRunNavigate( term.trim(), 'q' );
    useUpdateList( q, initialCountries, setListCountries, 2000 );

    const handleInputChange = e => {
        const value = e.target.value.toLowerCase();
        setTerm( value );
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
