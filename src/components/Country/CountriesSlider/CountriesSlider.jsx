import { useGetAsyncData } from "hooks/useGetAsyncData";

// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import styles from './CountriesSlider.module.scss';
import { GridCard } from "../GridCard/GridCard";
import { useContext, useEffect, useState } from "react";
import { CountriesContext } from "context/CountriesContext";

export const CountriesSlider = ({ subregion, borders, cca3 }) => {

    const excluidos = [ ...borders, cca3 ];
    const { countries: allCountries } = useContext( CountriesContext );
    const [ slides, setSlides ] = useState( null );

    useEffect( () => {

        if( !allCountries ) return;
        const newSlides = allCountries.filter( country => country.subregion === subregion && !excluidos.includes( country.cca3 ) );
        setSlides( newSlides );
        
    }, [ allCountries ] ); 

    // console.log( 'CountriesSlider' );

    return slides && (
        <>

            <h3 className="text-center fw-bold mb-5">
                Otros países de { subregion }
            </h3>

            <div>
                <Swiper
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={15}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        500: {
                            slidesPerView: 2,
                        },
                        850: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 4,
                        }
                    }}
                    freeMode={ true }
                    observer={ true }
                    navigation={true}
                    scrollbar={{ draggable: true }}
                    className={ styles.mySwiper }
                >
                    {
                        slides.map( country => (
                            <SwiperSlide key={ country.cca3 }>
                                <GridCard { ...country } />    
                            </SwiperSlide>
                        ) )
                    }
                </Swiper>
            </div>
            
        </>
    );

}

