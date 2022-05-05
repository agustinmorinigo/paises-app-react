import { useEffect } from "react";
import queryString from 'query-string';
import { useLocation, useNavigate } from "react-router-dom";

export const useRunNavigate = ( newValue, queryType ) => {

    const navigate = useNavigate();
    const location = useLocation();

    useEffect( () => {

        const search = queryString.parse(location.search);
        delete search[queryType];
        const newQuery = queryString.stringify({ ...search, ...( !!newValue && {[queryType]: newValue} ) });
        navigate( `?${ newQuery }` );
        
    }, [ newValue ] );
    
}
