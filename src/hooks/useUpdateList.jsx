import { getSortCountries } from "helpers";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from 'query-string';
import debounce from 'lodash.debounce';

// https://www.freecodecamp.org/news/debounce-and-throttle-in-react-with-hooks/
export const useUpdateList = ( dependency, listCountries, setListCountries, debouncerDelay = 0 ) => {

    const location = useLocation();

    useEffect( () => {

        const searchLocation = queryString.parse( location.search );
        setListCountries( getSortCountries( searchLocation, listCountries ) );

        // const debouncedSave = debounce(() => console.log( 'Delay run' ), debouncerDelay);
        // debouncedSave();
        
        
    }, [ dependency ] );
    
};