import { getSortCountries } from "helpers";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from 'query-string';

export const useUpdateList = ( dependency, listCountries, setListCountries, debouncerDelay = 0 ) => {

    const location = useLocation();

    useEffect( () => {

        const searchLocation = queryString.parse( location.search );
        setListCountries( getSortCountries( searchLocation, listCountries ) );
        
    }, [ dependency ] );
    
};