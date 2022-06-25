import { ListContainer } from "components/List/Container/Container";
import { Spinner } from "components/UI/Spinner/Spinner";
import { Title } from "components/UI/Title/Title";
import { ejecutarOrden } from "helpers";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SearchPage = () => {

    const { term } = useParams();
    const [ results, setResults ] = useState( null );

    useEffect( () => {

        setResults( null );

        const realizarFetch = async () => {
        
            try {
                const url = `https://restcountries.com/v3.1/name/${ term }`;
                const resp = await fetch( url );
                const countries = await resp.json();
                ( countries.length > 0 ) ? setResults( ejecutarOrden('a-to-z', countries) ) : setResults([]);
            } catch (error) {
                setResults([]);
            }
        
        }

        realizarFetch();
        
    }, [ term ] );
    
    return results ? (
        <>
          {
              results.length === 0 ? (
                  <>
                    <Title>No hay resultados de '{ term }'</Title>
                  </>
              ) : (
                <>
                    <Title>Resultados encontrados de '{ term }'</Title>
                    <ListContainer countries={ results } />
                </>
              )
          }
        </>
      ) : (
        <Spinner />
      );
    
}