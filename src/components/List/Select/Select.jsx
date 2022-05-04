import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { orderOptions } from 'helpers';
import { useUpdateList } from 'hooks/useUpdateList';
import { useRunNavigate } from 'hooks/useRunNavigate';

const ListSelect = ({ listCountries, setListCountries }) => {

  const location = useLocation();
  const { order = '' } = queryString.parse( location.search );
  const [ value, setValue ] = useState( order );
  
  useRunNavigate( value, 'order' );
  useUpdateList( order, listCountries, setListCountries );

  const handleSelectChange = e => {
    const newValue = e.target.value.trim().toLowerCase();
    setValue( newValue );
  }

  return (
    <select 
        className="form-select form-select-lg w-100 animate__animated animate__bounceIn animate__faster"
        aria-label=".form-select-lg"
        onChange={ handleSelectChange }
        defaultValue={ order }
        style={{ backgroundColor: 'transparent' }}
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