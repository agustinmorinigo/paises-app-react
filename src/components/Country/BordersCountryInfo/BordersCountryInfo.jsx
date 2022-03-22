import { useOutletContext } from "react-router-dom";
import { CountriesGrid } from "../CountriesGrid/CountriesGrid";
import 'index.scss';
import './BordersCountryInfo.scss';
import { Spinner } from "components/UI/Spinner/Spinner";
import { useContext, useEffect, useState } from "react";
import { CountriesContext } from "context/CountriesContext";

export const BordersCountryInfo = () => {

  const countryInfo = useOutletContext();
  const { name: { common }, borders } = countryInfo;
  const { countries: allCountries } = useContext( CountriesContext );
  const [ countries, setCountries ] = useState( null );

  useEffect( () => {

    if( !allCountries ) return;
    const newCountries = allCountries.filter( country => borders.includes( country.cca3 ) );
    setCountries( newCountries );

  }, [ allCountries, borders ] );

  return (
    <div id="cards-container" className="container-fluid bg-success text-uppercase">
      <h4 className="text-center pb-5 mb-5">Países que limitan con { common }</h4>
      {
        countries ? (
          countries?.length > 0 ? <CountriesGrid countries={ countries } /> : <p>No hay resultados!</p>
        ) : (
          <Spinner />
        )
      }
    </div>
  );

}
