import { CountriesGrid } from 'components/Country/CountriesGrid/CountriesGrid';
import { Title } from 'components/Title/Title';
import { Spinner } from 'components/UI/Spinner/Spinner';
import { CountriesContext } from 'context/CountriesContext';
import { useContext } from 'react';

export const HomePage = () => {

  const { countries } = useContext( CountriesContext );
  
  return countries ? (
    <div>
      <Title>Países del mundo</Title>
      <CountriesGrid countries={ countries } />
    </div>
  ) : (
    <Spinner />
  );

};