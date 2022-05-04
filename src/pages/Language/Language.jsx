import { useContext, useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { CountriesContext } from 'contexts/CountriesContext';
import { ListContainer } from 'components/List/Container/Container';
import { Title } from 'components/UI/Title/Title';
import { Spinner } from 'components/UI/Spinner/Spinner';
import { getNameOf } from 'helpers';
import { getCountriesByLang } from 'selectors';

export const LanguagePage = () => {

  const { id: languageId } = useParams();
  const { countries } = useContext( CountriesContext );
  const [ countriesToShow, setCountriesToShow ] = useState( null );

  useEffect( () => {
    const filteredCountries = getCountriesByLang( countries, languageId );
    setCountriesToShow( filteredCountries );
  }, [ languageId, countries ] );

  if( countriesToShow?.length === 0 ) {
    return <Navigate to={ '/' } />
  }

  // console.log( 'LanguagePage.' );

  return countriesToShow ? (
    <>
      <Title>Países que hablan { getNameOf( languageId ) }</Title>
      <ListContainer countries={ countriesToShow } />
    </>
  ) : (
    <Spinner />
  );

}