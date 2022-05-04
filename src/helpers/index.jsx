export const goToTop = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

export const transformData = (resp) => {

    resp = resp.map( ({ region, capital, name, flags, cca3 }) => ({
      region,
      capital: capital ? capital[0] : '',
      name: name.common || name.official,
      flags: flags.svg || flags.png,
      cca3
    }) );
    
    return resp.sort( ( country1, country2 ) => {
      const name1 = country1.name.trim().toLowerCase();
      const name2 = country2.name.trim().toLowerCase();
      return ( name1 > name2 ) ? 1 : -1;
    } );
    
};

export const getNameOf = id => {

  switch ( id ) {
    case 'spa': return 'español';
    case 'eng': return 'inglés';
    case 'fra': return 'francés';
    case 'zho': return 'chino';
    default: return 'inválido';
  }
  
}

// ESTO PUEDE SER QUE VAYA EN OTRO LADO, PORQUE TAMBIÉN RETORNA CÓDIGO JSX.
export const getInfoOf = array => {

  return (
    <ul>
      {
        array.map( item => <li key={ item }>{ item }</li> )
      }
    </ul>
  );
  
}

export const getCapitalInfo = ( capitalName, capitalCoordinates ) => {

  return(
    <>
      <p>
        <span className="d-block">Nombre:</span>
        <span className="d-block ps-5">{ capitalName }</span>
      </p>

      <p>
        <span className="d-block">Coordenadas:</span>
        <span className="d-block ps-5">Latitud: { capitalCoordinates.latlng[0] }</span>
        <span className="d-block ps-5">Longitud: { capitalCoordinates.latlng[1] }</span>
      </p>
    </>
  );
  
}

export const getDrivePosition = side => ( side === 'right' ) ? 'Izquierda' : 'Derecha';

export const getCurrencies = currencies => {

  let newCurrenciesFormat = [];
  
  for ( const info in currencies ) {
    newCurrenciesFormat.push({
      currencyCode: info,
      currencyName: currencies[info].name,
      currencySymbol: currencies[info].symbol
    });
  }

  return(
    <ul>
      {
        newCurrenciesFormat.map( ({ currencyCode, currencyName, currencySymbol }) => (
          <li key={currencyCode}>
            <span className="d-block">{ currencyCode }</span>
            <span className="d-block ps-2">Nombre: { currencyName }</span>
            <span className="d-block ps-2">Símbolo: { currencySymbol }</span>
          </li>
        ) )
      }
    </ul>
  );
  
}

export const getLenguages = languages => {

  let newLanguagesFormat = [];
  
  for( const language in languages ) {
    newLanguagesFormat.push( languages[language] );
  }

  const string = newLanguagesFormat.join( ', ' );
  return string;
  
}

export const getFormattedNumber = number => {
  return Number( number ).toLocaleString( 'en' ).replace( /,/g,"." );
}

export const getPhoneCode = phoneInfo => {
  return `${ phoneInfo.root }${ phoneInfo.suffixes[0] }`;
}

export const getDay = day => {

  day = day.trim().toLowerCase();
  
  const daysFormat = {
    monday: 'lunes',
    tuesday: 'martes',
    wednesday: 'miércoles',
    thursday: 'jueves',
    friday: 'viernes',
    saturday: 'sábado',
    sunday: 'domingo'
  };

  return daysFormat[ day ] || 'No especificado';
  
}

export const getCoordinate = coordinates => {
  return(
    <ul>
      <li>
        <span>Altitud: { coordinates[0] }</span>  
      </li>
      <li>
        <span>Longitud: { coordinates[1] }</span>  
      </li>
    </ul>
  );
}

export const getRegion = ( region, subregion ) => {

  return (
    <ul>
      <li>Región: { region }</li>
      { subregion && <li>Subregión: { subregion }</li> }
    </ul>
  );
  
}

export const getTranslations = translations => {

  const newFormat = [];
  
  for( const data in translations ) {

    newFormat.push({
      language: data,
      translation: translations[data].official
    });
    
  }

  return(
    <ul>
      {
        newFormat.map( ({ language, translation }) => (
          <li key={ language }>{ translation }</li>
        ) )
      }
    </ul>
  );
  
}

export const getBorders = ( countries, borders ) => {

  const filteredCountries = countries?.filter( country => borders?.includes( country.cca3 ) );;
  return filteredCountries;
  
}

export const reset = text => {
  return text.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"");
}

export const sortByAZ = ({ name: name1 }, { name: name2 }) => {
  return ( reset(name1.common) > reset(name2.common) ) ? 1 : -1;
}

export const sortByZA = ({ name: name1 }, { name: name2 }) => {
  return ( reset(name1.common) < reset(name2.common) ) ? 1 : -1;
}

export const sortBySmallerPopulation = ({ population: population1 }, { population: population2 }) => {
  return ( population1 > population2 ) ? 1 : -1;
}

export const sortByHigherPopulation = ({ population: population1 }, { population: population2 }) => {
  return ( population1 < population2 ) ? 1 : -1;
}

export const sortBySmallerArea = ({ area: area1 }, { area: area2 }) => {
  return ( area1 > area2 ) ? 1 : -1;
}

export const sortByHigherArea = ({ area: area1 }, { area: area2 }) => {
  return ( area1 < area2 ) ? 1 : -1;
}

export const getSortCountries = (search, listCountries) => {

  const { q, order } = search;
  let newList = [ ...listCountries ];

  if( !q && !order ) {
    return newList;
  }

  if( q ) {
    newList = newList?.filter( country => country.name?.common.trim().toLowerCase().includes(q) )
  }

  if( order ) {

    switch( order ) {
      case 'a-to-z':             return newList.sort( sortByAZ );
      case 'z-to-a':             return newList.sort( sortByZA );
      case 'smaller-population': return newList.sort( sortBySmallerPopulation );
      case 'higher-population':  return newList.sort( sortByHigherPopulation );
      case 'smaller-area':       return newList.sort( sortBySmallerArea );
      case 'higher-area':        return newList.sort( sortByHigherArea );
      default:                   return newList;
    }
  }

  return newList;
  
}

export const orderOptions = [
  { text: 'Ordenar por', value: '' },
  { text: 'A - Z', value: 'a-to-z' },
  { text: 'Z - A', value: 'z-to-a' },
  { text: 'Menor población', value: 'smaller-population' },
  { text: 'Mayor población', value: 'higher-population' },
  { text: 'Menor territorio', value: 'smaller-area' },
  { text: 'Mayor territorio', value: 'higher-area' }
];