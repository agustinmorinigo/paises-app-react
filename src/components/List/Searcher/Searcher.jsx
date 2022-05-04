import { useEffect, useState } from 'react';
// import debounce from 'lodash.debounce';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { getSortCountries, updateList } from 'helpers';

// https://www.freecodecamp.org/news/debounce-and-throttle-in-react-with-hooks/
export const ListSearcher = ({ theme, listCountries, setListCountries, initialCountries }) => {

    const navigate = useNavigate();
    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );
    const [ term, setTerm ] = useState( q );

    const handleInputChange = e => {
        // FALTA AGREGAR EL DEBOUNCE.
        const value = e.target.value.toLowerCase();
        setTerm( value );

        // REPITE.
        const search = queryString.parse(location.search);
        const { q, ...allParams } = search; // ...allParams trae todos los params excepto q
        const newQuery = queryString.stringify({ ...allParams, ...( !!value && {q: value.trim()} ) });
        navigate( `?${ newQuery }` );
        // REPITE.
    }

    useEffect( () => {
        
        // ACÁ TENGO QUE VOLVER A EJECUTAR LA FUNCIÓN DE ORDEN.
        // console.log( q );
        // console.log( initialCountries?.filter( c => c.name?.common.trim().toLowerCase().includes(q) ) );
        // console.log( 'Se ejecutó el effect del Input.' );

        // ( q === '' )
        //     ? setListCountries( [...initialCountries] )
        //     : setListCountries( initialCountries?.filter( c => c.name?.common.trim().toLowerCase().includes(q) ) );

        // console.log( q );
        // updateList( location.search );



        // getSortCountries( queryString.parse( location.search ), initialCountries );
        setListCountries( getSortCountries( queryString.parse( location.search ), initialCountries ) );
        
    }, [ q ] );



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
