import { AppRouter }     from 'routes/Root';
import CountriesProvider from 'contexts/CountriesContext';
import ThemeProvider     from 'contexts/ThemeContext';

const App = () => {

  return (
    <CountriesProvider>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </CountriesProvider>
  );

}

export default App;
