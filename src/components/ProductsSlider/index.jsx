import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';
import ProductItem from '../ProductItem';
const ProductsSlider = (props) => {
    return (
        <div className='ProductsSlider py-3'>

            
                <Swiper
                    slidesPerView={props.items}
                    spaceBetween={10}

                    navigation={true}
                    modules={[Navigation]}
                    className="smlBtn"
                >

                    <SwiperSlide>
                  <ProductItem/>

                    </SwiperSlide>
                    <SwiperSlide>
                  <ProductItem/>

                    </SwiperSlide>
                    <SwiperSlide>
                  <ProductItem/>

                    </SwiperSlide>
                    <SwiperSlide>
                  <ProductItem/>

                    </SwiperSlide>
                    <SwiperSlide>
                  <ProductItem/>

                    </SwiperSlide>
                    <SwiperSlide>
                  <ProductItem/>

                    </SwiperSlide>
                    <SwiperSlide>
                  <ProductItem/>

                    </SwiperSlide>
                    <SwiperSlide>
                  <ProductItem/>

                    </SwiperSlide>
                </Swiper>

            </div>

       

    )
}

export default ProductsSlider;