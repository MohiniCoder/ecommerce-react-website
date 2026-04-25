import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';
 const HomeSlider = () => {
  return (
      <div className='homeSlider py-4'>
        <div className="container">
          <Swiper  
          loop={true}
          spaceBetween={10} 
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true} modules={[Autoplay,Navigation]} className="SliderHome">
        <SwiperSlide>
          <div className='item rounded-[20px] overflow-hidden'>
          <img src="https://serviceapi.spicezgold.com/download/1759938751802_30744.jpg" alt="banner slide 1 " className='w-full'></img>
          </div></SwiperSlide>
        <SwiperSlide><div className='item rounded-[20px] overflow-hidden '><img src="https://serviceapi.spicezgold.com/download/1759938751802_30744.jpg" alt="banner slide 2" className='w-full'></img></div></SwiperSlide>
        <SwiperSlide><div className='item rounded-[20px] overflow-hidden'><img src="https://serviceapi.spicezgold.com/download/1751685130717_NewProject(8).jpg" alt="banner slide 2"  className='w-full'></img></div></SwiperSlide>
         <SwiperSlide><div className='item rounded-[20px] overflow-hidden'><img src="https://serviceapi.spicezgold.com/download/1748955932914_NewProject(1).jpg" alt="banner slide 2"  className='w-full'></img></div></SwiperSlide>
          
      </Swiper>
        </div>

     </div>
  )
}

export default HomeSlider;