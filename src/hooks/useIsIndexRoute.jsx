import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useIsIndexRoute = ( baseParam ) => {

  const location = useLocation();
  const [ isIndexRoute, setIsIndexRoute ] = useState( true );

  useEffect( () => {

    location.pathname.split('/').pop() === baseParam 
      ? setIsIndexRoute( true )
      : setIsIndexRoute( false );
      
  }, [ baseParam, location ] );
    
  return isIndexRoute;
  
}
