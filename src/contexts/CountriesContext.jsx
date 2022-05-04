import { createContext, useEffect, useState } from 'react';
import { getAllCountries } from 'selectors';

export const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {

    const [ countries, setCountries ] = useState( null );

    useEffect( () => {
        getAllCountries( setCountries );
    }, [] );
    
    return (
        <CountriesContext.Provider value={{ countries, setCountries }}>
            { children }
        </CountriesContext.Provider>
    );

}

export default CountriesProvider;
