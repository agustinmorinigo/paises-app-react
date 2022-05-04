import { useContext, useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { CountriesContext } from 'contexts/CountriesContext';
import { ListContainer } from 'components/List/Container/Container';
import { Title } from 'components/UI/Title/Title';
import { Spinner } from 'components/UI/Spinner/Spinner';
import { getCountriesByContinent } from 'selectors';

export const ContinentPage = () => {

  const { id: continentId } = useParams();
  const { countries } = useContext( CountriesContext );
  const [ countriesToShow, setCountriesToShow ] = useState( null );

  useEffect( () => {

    const filteredCountries = getCountriesByContinent( countries, continentId );
    setCountriesToShow( filteredCountries );
    
  }, [ continentId, countries ] );
  
  if( countriesToShow?.length === 0 ) {
    return <Navigate to={ '/' } />
  }

  return countriesToShow ? (
    <>
      <Title>Países de { continentId }</Title>
      <ListContainer countries={ countriesToShow } />
    </>
  ) : (
    <Spinner />
  );

}