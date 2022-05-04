import {
  getCapitalInfo,
  getCurrencies,
  getDrivePosition,
  getInfoOf,
  getLenguages
} from 'helpers';

import { useOutletContext } from 'react-router-dom';
import { AccordionItem } from '../AccordionItem/AccordionItem';

export const GeneralInfo = () => {

  const countryInfo = useOutletContext();

  const {
    altSpellings,
    capital,
    capitalInfo,
    car,
    continents,
    currencies,
    languages,
    timezones,
    borders
  } = countryInfo;

  const accordionId = 'general-info-accordion';

  return(

    <div className="accordion" id={ accordionId }>

      {
        altSpellings && altSpellings.length > 0 && (
          <AccordionItem
            id={ 'alt-spellings' }
            title={ 'Otros nombres' }
            text={ getInfoOf( altSpellings ) }
            accordionId={ accordionId }
            hasBorders={ borders }
          />
        )
      }

      {
        ( capital && capital.length && capitalInfo && Object.keys( capitalInfo ).length > 0 ) > 0 && (
          <AccordionItem
            id={ 'capital' }
            title={ 'Capital' }
            text={ getCapitalInfo( capital[0], capitalInfo ) }
            accordionId={ accordionId }
            hasBorders={ borders }
          />
        )
      }

      {
        car && Object.keys( car ).length > 0 && (
          <AccordionItem
            id={ 'drive-position' }
            title={ 'Posición de conducción' }
            text={ getDrivePosition( car?.side.trim().toLowerCase() ) }
            accordionId={ accordionId }
            hasBorders={ borders }
          />
        )
      }

      {
        continents && continents.length > 0 && (
          <AccordionItem
            id={ 'continents' }
            title={ 'Continentes que abarca' }
            text={ getInfoOf( continents ) }
            accordionId={ accordionId }
            hasBorders={ borders }
          />
        )
      }

      {
        currencies && Object.keys( currencies ).length > 0 && (
          <AccordionItem
            id={ 'currencies' }
            title={ 'Monedas' }
            text={ getCurrencies( currencies ) }
            accordionId={ accordionId }
            hasBorders={ borders }
          />
        )
      }

      {
        languages && Object.keys( languages ).length > 0 && (
          <AccordionItem
            id={ 'languages' }
            title={ 'Lenguajes' }
            text={ getLenguages( languages ) }
            accordionId={ accordionId }
            hasBorders={ borders }
          />
        )
      }

      {
        timezones && timezones.length > 0 && (
          <AccordionItem
            id={ 'timezones' }
            title={ 'Zonas horarias' }
            text={ getInfoOf( timezones ) }
            accordionId={ accordionId }
            hasBorders={ borders }
          />
        )
      }

    </div>

  );
  
}
