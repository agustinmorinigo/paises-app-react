import { useContext } from 'react';
import { CountriesContext } from 'contexts/CountriesContext';
import { ListContainer } from 'components/List/Container/Container';
import { Title } from 'components/UI/Title/Title';
import { Spinner } from 'components/UI/Spinner/Spinner';

export const HomePage = () => {

  const { countries } = useContext( CountriesContext );
  // const countries = null;
  
  return countries ? (
    <div>
      <Title>Países del mundo</Title>
      <ListContainer countries={ countries } />
    </div>
  ) : (
    <Spinner />
  );

};