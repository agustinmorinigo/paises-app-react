import { Route, Routes } from 'react-router-dom';
import CountryPage       from 'pages/Country/Country';
import { GeneralInfo }   from 'components/Country/Info/General/General';
import GeographyInfo     from 'components/Country/Info/Geography/Geography';
import { BordersInfo }   from 'components/Country/Info/Borders/Borders';
import { ExtraInfo }     from 'components/Country/Info/Extra/Extra';

export const CountryRoutes = () => {

  return(
    <Routes>
      <Route path=":id" element={ <CountryPage /> }>
        <Route index             element={ <GeneralInfo /> }   />
        <Route path="geography"  element={ <GeographyInfo /> } />
        <Route path="borders"    element={ <BordersInfo /> }   />
        <Route path="extra-info" element={ <ExtraInfo /> }     />
      </Route>
    </Routes>
  );
    
}