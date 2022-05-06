import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'contexts/ThemeContext';
import { ListLayout } from '../Layout/Layout';
import { ListPagination } from '../Pagination/Pagination';
import ListSelect from '../Select/Select';
import { ListSearcher } from '../Searcher/Searcher';
import { Spinner } from 'components/UI/Spinner/Spinner';

export const ListContainer = ({ countries }) => { 

  const [ listCountries, setListCountries ] = useState( [] );
  const [ currentCountries, setCurrentCountries ] = useState( null );
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

          {
            isDone && (
              <>
                <div className="col-12 col-md-6 col-xxl-5 mb-4 mb-md-0">
                      <ListSearcher
                        theme={ theme } 
                        initialCountries={ countries }
                        setListCountries={ setListCountries }
                      />
                </div>
                
                <div className="col-12 col-md-6 col-xxl-5 ms-xxl-auto">
                      <ListSelect
                        theme={ theme }
                        listCountries={ listCountries }
                        setListCountries={ setListCountries }
                      />
                </div>
              </>
            )
          }

        </div>
      </div>

      {
        listCountries?.length > 0 ? (
          <ListLayout countries={ currentCountries } />
        ) : (
          <p>¡No hay resultados para mostrar!</p>
        )
      }
    
      <ListPagination 
        theme={ theme } 
        listCountries={ listCountries } 
        setCurrentCountries={ setCurrentCountries } 
      />
      
    </>
  ) : (
    <Spinner />
  );

}