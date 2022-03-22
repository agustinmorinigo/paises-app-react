import { CountriesGrid } from 'components/Country/CountriesGrid/CountriesGrid';
import { Title } from 'components/Title/Title';
import { Spinner } from 'components/UI/Spinner/Spinner';
import { CountriesContext } from 'context/CountriesContext';
import { getLanguagesOf, getNameOf } from 'helpers';
import { useContext, useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

export const LanguagePage = () => {

  const { id: languageId } = useParams();
  const { countries: allCountries } = useContext( CountriesContext );
  const [ countries, setCountries ] = useState( null );

  useEffect( () => {
    
    if( !allCountries ) return;
    const newCountries = allCountries.filter( country => getLanguagesOf( country ).includes( languageId ) );
    setCountries( newCountries )
    
  }, [ languageId, allCountries ] );

  if( countries?.length === 0 ) {
    return <Navigate to={ '/' } />
  }

  return countries ? (
    <>
      <Title>Países que hablan { getNameOf( languageId ) }</Title>
      <CountriesGrid countries={ countries } />
    </>
  ) : (
    <Spinner />
  )

}
