import { useContext, useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { CountriesContext } from 'contexts/CountriesContext';
import { ListLayout } from 'components/List/Layout/Layout';
import { Spinner } from 'components/UI/Spinner/Spinner';
import { getBorders } from 'helpers';

import './Borders.scss';
import 'index.scss';

export const BordersInfo = () => {

  const countryInfo = useOutletContext();
  const { name, borders } = countryInfo;
  const { countries } = useContext( CountriesContext );
  const [ bordersToShow, setbordersToShow ] = useState( null );

  useEffect( () => {

    const filteredBorders = getBorders( countries, borders );
    setbordersToShow( filteredBorders );

  }, [ countries, borders ] );

  return (
    <div id="cards-container" className="container-fluid">

      <h4 className="text-center my-5 m-md-0 mb-md-5 display-6 fw-bold">
        Países que limitan con { name?.common }
      </h4>

      {
        bordersToShow ? (
          bordersToShow?.length > 0 ? <ListLayout countries={ bordersToShow } /> : <p>No hay resultados!</p>
        ) : (
          <Spinner />
        )
      }
      
    </div>
  );

}
