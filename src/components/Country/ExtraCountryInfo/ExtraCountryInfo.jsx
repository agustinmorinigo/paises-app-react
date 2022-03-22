import { getDay, getInfoOf, getPhoneCode, getTranslations } from "helpers";
import { useOutletContext } from "react-router-dom";
import { AccordionItem } from "../AccordionItem/AccordionItem";

export const ExtraCountryInfo = () => {
  
  const countryInfo = useOutletContext();
  const { idd, independent, startOfWeek, tld, translations, borders } = countryInfo;
  const accordionId = 'extra-info-accordion';
  
  return (
    
    <div className="accordion" id={ accordionId }>

      {
        idd && Object.keys( idd ).length > 0 && (
          <AccordionItem 
            id={ 'phone-code' }
            title={ 'Código de teléfono' }
            text={ `El código de teléfono para llamar a este país, es "${ getPhoneCode( idd ) }"` }
            accordionId={ accordionId }
            hasBorders={ borders }
          />
        )
      }
    
      {
          <AccordionItem 
            id={ 'is-independent' }
            title={ '¿Es un país independiente?' }
            text={independent ? 'Si, este es un país independiente' : 'No, este país no es un país independiente'}
            accordionId={ accordionId }
            hasBorders={ borders }
          />
      }

      {
        startOfWeek && (
          <AccordionItem 
            id={ 'startOfWeek' }
            title={ 'Inicio de la semana' }
            text={ `En este país, la semana inicia el día ${ getDay( startOfWeek ) }` }
            accordionId={ accordionId }
            hasBorders={ borders }
          />
        )
      }

      {
        tld && tld.length > 0 && (
          <AccordionItem 
            id={ 'internet-domains' }
            title={ 'Dominios de internet' }
            text={ getInfoOf( tld ) }
            accordionId={ accordionId }
            hasBorders={ borders }
          />
        )
      }

      {
        translations && Object.keys( translations ).length > 0 && (
          <AccordionItem
            id={ 'translations' }
            title={ 'Traducciones en otros países' }
            text={ getTranslations( translations ) }
            accordionId={ accordionId }
            hasBorders={ borders }
          />
        )
      }

    </div>
    
  );

}
