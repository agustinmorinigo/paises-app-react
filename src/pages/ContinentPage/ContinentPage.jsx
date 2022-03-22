import { CountriesGrid } from 'components/Country/CountriesGrid/CountriesGrid';
import { Title } from 'components/Title/Title';
import { Spinner } from 'components/UI/Spinner/Spinner';
import { CountriesContext } from 'context/CountriesContext';
import { reset } from 'helpers';
import { useContext, useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

export const ContinentPage = () => {

  const { countries: allCountries } = useContext( CountriesContext );
  const [ countries, setCountries ] = useState( null );
  const { id: continentId } = useParams();

  useEffect( () => {

    if( !allCountries ) return;
    const newCountries = allCountries.filter( ({ region }) => reset(region) === reset(continentId) );
    setCountries( newCountries );
    
  }, [ continentId, allCountries ] );
  
  if( countries?.length === 0 ) { 
    // Es 0 cuando se hizo la petición y no se encontraron resultados, es decir cuando el usuario manipuló la URL.
    return <Navigate to={ '/' } />
  }

  return countries ? (
    <>
      <Title>Países de { continentId }</Title>
      <CountriesGrid countries={ countries } />
    </>
  ) : (
    <Spinner />
  );

}