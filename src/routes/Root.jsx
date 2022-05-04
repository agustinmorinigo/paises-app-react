import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage }      from 'pages/Home/Home';
import { ContinentPage } from 'pages/Continent/Continent';
import { LanguagePage }  from 'pages/Language/Language';
import { SearchPage }    from 'pages/Search/Search';
import { NotFoundPage }  from 'pages/NotFound/NotFound';
import { Layout }        from 'components/Common/Layout/Layout';
import { CountryRoutes } from './CountryRoutes';

export const AppRouter = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index                element={ <HomePage /> }      />
          <Route path="country/*"     element={ <CountryRoutes /> } />
          <Route path="continent/:id" element={ <ContinentPage /> } />
          <Route path="language/:id"  element={ <LanguagePage /> }  />
          <Route path="search/:term"  element={ <SearchPage /> }    />
          <Route path="*"             element={ <NotFoundPage /> }  />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  
}