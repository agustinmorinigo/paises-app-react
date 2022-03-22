import { AppRouter } from 'components/routers/AppRouter';
import CountriesProvider from 'context/CountriesContext';

const App = () => {

  return (
    <CountriesProvider>
      <AppRouter />
    </CountriesProvider>
  );

}

export default App;
