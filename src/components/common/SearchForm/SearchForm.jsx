import { ejecutarOrden } from "helpers";
import { useDebounce } from "hooks/useDebounce";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from './SearchForm.module.scss';

export const SearchForm = () => {

    // LA INFORMACIÓN DE ESTE COMPONENTE DEBE SER PERSISTENTE TAMBIÉN.
    // Los botones "buscar" y "ver todos" van a apuntar a un mismo lugar "search" o algo así.
    // Mejorar el código de este componente.

    const [ term, setTerm ] = useState( '' );
    const [ results, setResults ] = useState( null );
    const [ showModal, setShowModal ] = useState( false );
    const debouncedTerm = useDebounce( term, 500 );
    
    useEffect( () => {
        setShowModal( true );
        ( term === '' ) ? setResults( null ) : realizarFetch();
    }, [debouncedTerm] );

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
    
    const handleInputChange = e => {
        const newValue = e.target.value.trim().toLowerCase();
        setTerm( newValue );
    }

    const ejecutarBlur = () => {
        setTimeout( () => setShowModal( false ), 100 );
    }
    
    return (

        <div className={ `d-flex ${ styles.formContainer }` }>

            <form className="d-flex" noValidate autoComplete="off">
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Buscar país..."
                    aria-label="Search"
                    value={ term }
                    onChange={ handleInputChange }
                    onFocus={ () => setShowModal( true ) }
                    onBlur={ ejecutarBlur }
                />
                <button className="btn btn-warning" type="submit">Buscar</button>
            </form>

            {
                ( results && showModal ) && (
                    <div className={ `${ styles.searchResult }` }>

                        {
                            results?.length > 0 && (
                                <div className="">
                                    <div 
                                        className="results-found mb-3"
                                        style={{ maxHeight: '302px', overflowX: 'hidden', overflowY: 'auto' }}
                                    >
                                        {
                                            results.map( ({ cca3, flags, name }) => (
                                                // Este Link va a ser un component.
                                                <Link
                                                    key={ cca3 }
                                                    className="bg-dark mb-2 p-2 rounded-2 overflow-hidden d-flex justify-content-between align-items-center text-decoration-none"
                                                    to={ `/country/${ cca3 }` }
                                                >
                                                    <div className="country-info d-flex justify-content-center align-items-center">
                                                        <img 
                                                            src={ flags?.svg || flags?.png } 
                                                            className="rounded-2" 
                                                            alt={ name?.common || name?.official }
                                                            style={{ width: '60px', height: '38px' }}
                                                        />

                                                        <span className="h6 text-light m-0 mx-2">{ name?.common || name?.official }</span>
                                                    </div>
                                                </Link>
                                            ) )
                                        }
                                    </div>

                                    <button type="button" className="btn btn-warning d-block w-100">Ver todos</button>
                                </div>
                            )
                        }

                        {
                            results?.length === 0 && (
                                <p className="empty-search-message">
                                    ¡No se han encontrado resultados!
                                </p>
                            )
                        }
                        
                    </div>
                )
            }
            
        </div>

    );

}
