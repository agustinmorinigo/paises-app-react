import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'contexts/ThemeContext';
import { ListLayout } from '../Layout/Layout';
import { ListPagination } from '../Pagination/Pagination';
import ListSelect from '../Select/Select';
import { ListSearcher } from '../Searcher/Searcher';
import { Spinner } from 'components/UI/Spinner/Spinner';
import { Card } from 'components/Common/Card/Card';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCommonCountries } from 'selectors';

const getNewLocation = ( query, searchLocation ) => {

  query = query.trim().toLowerCase();
  
  ( query === "" )
    ? delete searchLocation.q
    : searchLocation.q = query;
  
  return `?${ queryString.stringify(searchLocation) }`;
  
}

export const ListContainer = ({ countries }) => { 

  const [ listCountries, setListCountries ] = useState( [] );
  // const [ currentCountries, setCurrentCountries ] = useState( null );
  const { theme } = useContext( ThemeContext );
  const [ isDone, setIsDone ] = useState( false );

  useEffect( () => {
    setListCountries( [...countries] );
    setIsDone( true );
  }, [ countries ] );

  return countries?.length > 0 ? (
    <>
    
      <div className="container-fluid mb-5">
        <div className="row">

          <div className="col-12 col-md-6 mb-4 mb-md-0">
            {
              isDone && (
                <ListSearcher
                  theme={ theme } 
                  listCountries={ listCountries }
                  setListCountries={ setListCountries }
                  initialCountries={ countries }
                />
              )
            }
          </div>
          
          <div className="col-12 col-md-6">
            {
              isDone && (
                <ListSelect
                  listCountries={ listCountries }
                  setListCountries={ setListCountries }
                />
              )
            }
          </div>

        </div>
      </div>

      {
        listCountries?.length > 0 ? (
          // <ListLayout countries={ currentCountries } />
          <ListLayout countries={ listCountries } />
        ) : (
          <p>¡No hay resultados para mostrar!</p>
        )
      }
    
      {/* <ListPagination theme={ theme } listCountries={ listCountries } setCurrentCountries={ setCurrentCountries } /> */}
      
    </>
  ) : (
    <Spinner />
  );

}