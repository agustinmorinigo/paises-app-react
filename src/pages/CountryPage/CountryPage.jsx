import { CountriesSlider } from "components/Country/CountriesSlider/CountriesSlider";
import { CountryNav } from "components/Country/CountryNav/CountryNav";
import { Spinner } from "components/UI/Spinner/Spinner";
import { CountriesContext } from "context/CountriesContext";
import { useContext, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import './CountryPage.scss';

export const CountryPage = () => {

    const { id: countryId } = useParams();
    const { countries } = useContext( CountriesContext );
    const [ country, setCountry ] = useState(null);

    useEffect( () => {

        if( !countries ) return;
        const newCountry = countries.find( ({ cca3 }) => cca3 === countryId );
        setCountry( newCountry );
        
    }, [ countryId, countries ] );

    console.log( country );

    return country ? (
        <>
            <h1 className="text-uppercase text-center display-3 fw-bold">
                <span className="mx-3">{ country.name.common }</span>
            </h1>

            <div className="container-fluid my-5">
            
                <div className="row">
                    <img 
                        src={ country.flags.svg || country.flags.png }
                        alt={ `Bandera de ${ country.name.common }` } 
                        className="img-fluid mx-auto rounded p-0 shadow-lg col-10 col-sm-8 col-md-6 col-lg-4"
                    />
                </div>
            
            </div>

            <div className="container-fluid w-100">
                <div className="row flex-md-row-reverse">

                    <div className="col-12 col-md-3 p-0 mb-4 mb-md-0 ps-md-2">
                        <CountryNav { ...country } />
                    </div>

                    <div className="col-12 col-md-9 me-auto p-0 pe-md-4 overflow-hidden">
                        <Outlet context={ country } />
                    </div>

                </div>
            </div>

            {
                country.borders && (
                    <div className="my-5 bg-danger w-100">
                        <CountriesSlider { ...country } />
                    </div>
                )
            }

        </>
    ) : (
        <Spinner />
    );

}
