import { useState, useEffect } from 'react';

export const useGetAsyncData = ( url, dependency  = null ) => {

    const [ data, setData ] = useState( null );

    useEffect( () => {

        setData( null );
        let isSubscribed = true;
    
        fetch( url )
          .then( resp => resp.json() )
          .then( data => isSubscribed && setData( data ) );
    
        return () => ( isSubscribed = false );
        
    }, [ dependency ] );

    return data;

}