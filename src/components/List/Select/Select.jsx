import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { getNewLocation, getSortCountries, orderOptions, reset, sortCountries, updateList } from 'helpers';

const ListSelect = ({ listCountries, setListCountries }) => {

  const navigate = useNavigate();
  const location = useLocation();
  const order = useRef( queryString.parse(location.search).order );
  // const updateList =

  // console.log(location);
  
  useEffect( () => {

    ( isValidOrder(order.current) )
      ? actualizarListado( location.search )
      : removeOrderParam();

  }, [] );

  const removeOrderParam = () => {
    
  }

  const isValidOrder = order => { // ESTO SE EJECUTA EN EL USEFFECT QUE SE EJECUTA 1 SOLA VEZ.
    order = reset( String(order) );
    const orderValues = orderOptions.map( ({ value }) => reset(value) );
    return order && orderValues.includes( order );
  }

  const actualizarListado = ( newQuery ) => {
    // getSortCountries( queryString.parse( newQuery ), listCountries );
    setListCountries( getSortCountries( queryString.parse( newQuery ), listCountries ) );
  }
  
  const runNewSort = orderType => {

    const search = queryString.parse(location.search);
    const { order, ...allParams } = search; // ...allParams trae todos los params excepto order
    const newQuery = queryString.stringify({ ...allParams, ...( !!orderType && {order: orderType} ) });
    navigate( `?${ newQuery }` );
    actualizarListado( newQuery );
    // console.log('HOLA.');
    // updateList( location.search );
    // useUpdateList();

  }

  return (
    <select 
        className="form-select form-select-lg w-100 animate__animated animate__bounceIn animate__faster"
        aria-label=".form-select-lg"
        onChange={ e => runNewSort(e.target.value) }
        style={{ backgroundColor: 'transparent' }}
        defaultValue={ order.current || '' }
    >
      {
        orderOptions.map( ({ text, value }) => (
          <option key={value} value={ value }>{ text }</option>
        ) )
      }
    </select>  
  );
    
}

export default React.memo( ListSelect );