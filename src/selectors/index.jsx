import { reset } from "helpers";

export const getAllCountries = async ( setState ) => {
    const request = await fetch( 'https://restcountries.com/v3.1/all' );
    const data = await request.json();
    setState( data );
}

export const getLanguagesOf = ({ languages }) => {

    let newFormLanguages = [];
  
    for( const lenguage in languages ) {
      newFormLanguages.push( lenguage );
    }
  
    return newFormLanguages;
    
}

export const getCountriesByLang = ( countries, langId ) => {
    const filteredCountries = countries?.filter( country => getLanguagesOf( country )?.includes( langId ) );
    return filteredCountries;
}
  
export const getCountriesByContinent = ( countries, continentId ) => {
    const filteredCountries = countries?.filter( ({ region }) => reset(region) === reset(continentId) );
    return filteredCountries;
}

export const getCountryById = ( countries, countryId ) => {
    const country = countries?.find( ({ cca3 }) => cca3 === countryId );
    return country;
}

export const getOtherCountriesInTheRegion = ( countries, subregion, exhibitedCountries ) => {

    const filteredCountries = countries?.filter( country => country.subregion === subregion && !exhibitedCountries.includes( country.cca3 ) );

    return filteredCountries;
    
}

export const getCommonCountries = ( countries, query ) => {

    const filteredCountries = countries.filter( country => country.name?.common.trim().toLowerCase().includes(query) );
    return filteredCountries;
    
}