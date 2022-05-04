import { useContext, useEffect, useState } from 'react';
import { CountriesContext } from 'contexts/CountriesContext';
import { Card } from 'components/Common/Card/Card';
import { getOtherCountriesInTheRegion } from 'selectors';

import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Slider.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Slider = ({ subregion, borders, cca3 }) => {

    const { countries } = useContext( CountriesContext );
    const [ sliderItems, setSliderItems ] = useState( null );
    const exhibitedCountries = [ ...borders, cca3 ];
    
    useEffect( () => {

        const countriesToShow = getOtherCountriesInTheRegion( countries, subregion, exhibitedCountries );
        setSliderItems( countriesToShow );

    }, [ countries, subregion, borders, cca3 ] );

    return sliderItems && (
        <>

            <h4 className="text-center my-5 m-md-0 mb-md-5 display-6 fw-bold">
                Otros países de { subregion }
            </h4>

            <div>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={15}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        400: { slidesPerView: 1.5 },
                        500: { slidesPerView: 2 },
                        850: { slidesPerView: 3 },
                        1200: { slidesPerView: 4 }
                    }}
                    freeMode={ true }
                    observer={ true }
                    className={ styles.mySwiper }
                >
                    {
                        sliderItems.map( country => (
                            <SwiperSlide key={ country.cca3 }>
                                <Card { ...country } />    
                            </SwiperSlide>
                        ) )
                    }
                </Swiper>
            </div>
            
        </>
    );

};