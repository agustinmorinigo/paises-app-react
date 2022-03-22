import { GeneralCountryInfo } from 'components/Country/GeneralCountryInfo/GeneralCountryInfo';
import { GeographyCountryInfo } from 'components/Country/GeographyCountryInfo/GeographyCountryInfo';
import { BordersCountryInfo } from 'components/Country/BordersCountryInfo/BordersCountryInfo';
import { ExtraCountryInfo } from 'components/Country/ExtraCountryInfo/ExtraCountryInfo';
import { Layout } from 'components/UI/Layout/Layout';
import { ContinentPage } from 'pages/ContinentPage/ContinentPage';
import { CountryPage } from 'pages/CountryPage/CountryPage';
import { HomePage } from 'pages/HomePage/HomePage';
import { LanguagePage } from 'pages/LanguagePage/LanguagePage';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={ <Layout /> }>
                <Route index element={ <HomePage /> } />
                <Route path="continent/:id" element={ <ContinentPage /> } />

                {/* ORDENAR ESTO */}
                <Route path="country/:id" element={ <CountryPage /> }>
                    <Route index element={ <GeneralCountryInfo /> } />
                    <Route path="geography" element={ <GeographyCountryInfo /> } />
                    <Route path="borders" element={ <BordersCountryInfo /> } />
                    <Route path="extra-info" element={ <ExtraCountryInfo /> } />
                </Route>
                {/* ORDENAR ESTO */}

                <Route path="language/:id" element={ <LanguagePage /> } />
                <Route path="*" element={ <NotFoundPage /> } />
            </Route>
            {/* <Route path="login" component={<Login />} /> */}
        </Routes>
    </Router>
  )
}
