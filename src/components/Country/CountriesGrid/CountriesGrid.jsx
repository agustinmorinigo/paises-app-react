import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Grid } from '../Grid/Grid';
import styles from './CountriesGrid.module.scss';
import { Spinner } from 'components/UI/Spinner/Spinner';

export const CountriesGrid = ({ countries }) => {

  const itemsPerPage = 24;
  const [ currentItems, setCurrentItems ] = useState( null );
  const [ pageCount, setPageCount ]       = useState( 0 );
  const [ itemOffset, setItemOffset ]     = useState( 0 );
  const [ arrayCopia, setArrayCopia ]     = useState( [] );
  const [ term, setTerm ] = useState( '' );

  useEffect( () => setArrayCopia( [ ...countries ] ), [ countries ] );
  
  useEffect( () => {

    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems( arrayCopia.slice(itemOffset, endOffset) );
    setPageCount( Math.ceil(arrayCopia.length / itemsPerPage) );

  }, [itemOffset, arrayCopia] );

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % arrayCopia.length;
    setItemOffset(newOffset);
  };

  // ESTE SELECT DEBE SER UN COMPONENTE APARTE.
  const ordenarPaises = e => {

    const tipoDeOrden = e.target.value;

    const paisesOrdenadorSegun = tipoDeOrden => {

      switch( tipoDeOrden ) {
        case 'a-to-z': return [ ...arrayCopia ].sort( ( country1, country2 ) => {
          const name1 = country1.name.common.trim().toLowerCase();
          const name2 = country2.name.common.trim().toLowerCase();
          return ( name1 > name2 ) ? 1 : -1;
        } );
        case 'z-to-a': return [ ...arrayCopia ].sort( ( country1, country2 ) => {
          const name1 = country1.name.common.trim().toLowerCase();
          const name2 = country2.name.common.trim().toLowerCase();
          return ( name1 < name2 ) ? 1 : -1;
        } );
        case 'smaller-population': return [ ...arrayCopia ].sort( ( country1, country2 ) => {
          const population1 = country1.population;
          const population2 = country2.population;
          return ( population1 > population2 ) ? 1 : -1;
        } );
        case 'higher-population': return [ ...arrayCopia ].sort( ( country1, country2 ) => {
          const population1 = country1.population;
          const population2 = country2.population;
          return ( population1 < population2 ) ? 1 : -1;
        } );
        case 'smaller-area': return [ ...arrayCopia ].sort( ( country1, country2 ) => {
          const area1 = country1.area;
          const area2 = country2.area;
          return ( area1 > area2 ) ? 1 : -1;
        } );
        case 'higher-area': return [ ...arrayCopia ].sort( ( country1, country2 ) => {
          const area1 = country1.area;
          const area2 = country2.area;
          return ( area1 < area2 ) ? 1 : -1;
        } );
        case 'random': return [ ...countries ];
        default: return [ ...arrayCopia ];
      }      
      
    }
    
    setArrayCopia( paisesOrdenadorSegun( tipoDeOrden ) );
    
  }

  const handleInputChange = e => {
    const value = e.target.value;
    setTerm( value );
  }

  return arrayCopia.length > 0 ? (
    <>
    
      <div className="container-fluid mb-5">
        <div className="row">

          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <input 
              className="form-control form-control-lg animate__animated animate__bounceIn animate__faster"
              type="text"
              placeholder="Buscar aquí..." 
              value={ term }
              onChange={ handleInputChange }
            />
          </div>
          
          <div className="col-12 col-md-6">
            <select 
              className="form-select form-select-lg w-100 animate__animated animate__bounceIn animate__faster"
              aria-label=".form-select-lg"
              onChange={ ordenarPaises }
            >
              <option defaultValue>Ordenar por</option>
              <option value="a-to-z">A - Z</option>
              <option value="z-to-a">Z - A</option>
              <option value="smaller-population">Menor población</option>
              <option value="higher-population">Mayor población</option>
              <option value="smaller-area">Menor territorio</option>
              <option value="higher-area">Mayor territorio</option>
              <option value="random">Aleatorio ( por defecto )</option>
            </select>  

          </div>  
        </div>
      </div>
    
      <Grid countries={ currentItems } />

      { arrayCopia.length > itemsPerPage && <ReactPaginate
        nextLabel=""
        breakLabel="..."
        previousLabel=""
        marginPagesDisplayed={ 2 }
        pageRangeDisplayed={ 3 }
        onPageChange={ handlePageClick }
        pageCount={ pageCount }
        renderOnZeroPageCount={ undefined }
        containerClassName={ `pagination text-center mt-5 ${ styles.myPagination } animate__animated animate__bounceIn animate__faster` }
        pageClassName={ 'page-item' }
        pageLinkClassName={ `page-link ${ styles.miClase } text-dark` }
        previousClassName={ 'page-item' }
        previousLinkClassName={ `page-link ${ styles.miClase } text-dark` }
        nextClassName={ 'page-item' }
        nextLinkClassName={ `page-link ${ styles.miClase } text-dark` }
        breakClassName={ 'page-item' }
        breakLinkClassName={ `page-link ${ styles.miClase } text-dark` }
        activeLinkClassName={ 'border border-2 border-dark' }
        disabledClassName={ 'opacity-50 pe-none' }
      /> }
      
    </>
  ) : (
    <Spinner />
  );

}