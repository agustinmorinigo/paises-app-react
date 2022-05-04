import { getCoordinate, getFormattedNumber, getRegion } from 'helpers';
import { useOutletContext } from 'react-router-dom';
import { AccordionItem } from '../AccordionItem/AccordionItem';

const GeographyInfo = () => {

  const countryInfo = useOutletContext();
  const { area, latlng, population, region, subregion, borders } = countryInfo; 
  const accordionId = 'country-info-accordion';

  return (

    <div className="accordion" id={ accordionId }>

      {
        area && (
          <AccordionItem 
            id={ 'area' }
            title={ 'Superficie' }
            text={ `El país tiene una superficie de ${ getFormattedNumber( area ) } km2` }
            accordionId={ accordionId }
            hasBorders={ borders }
          />
        )
      }

      {
        latlng && latlng.length > 0 && (
          <AccordionItem
            id={ 'country-latlng' }
            title={ 'Coordenadas del país' }
            text={ getCoordinate( latlng ) }
            accordionId={ accordionId }
            hasBorders={ borders }
          />
        )
      }

      {
        !isNaN( population ) && (
          <AccordionItem
            id={ 'population' }
            title={ 'Población' }
            text={ `El país cuenta con ${ getFormattedNumber( population ) } habitantes` }
            accordionId={ accordionId }
            hasBorders={ borders }
          />
        )
      }

      {
        region && (
          <AccordionItem
            id={ 'region' }
            title={ 'Región' }
            text={ getRegion( region, subregion ) }
            accordionId={ accordionId }
            hasBorders={ borders }
          />
        )
      }

    </div>

  );

}

export default GeographyInfo;
