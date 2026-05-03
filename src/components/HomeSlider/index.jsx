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
  spaceBetween={20}
  centeredSlides={true}
  slidesPerView={1.2}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  navigation={true}
  modules={[Autoplay, Navigation]}
  className="SliderHome"
>
       <SwiperSlide>
  <div className='item rounded-[20px] overflow-hidden h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]'>
    <img 
      src="https://plus.unsplash.com/premium_photo-1664202526559-e21e9c0fb46a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
      alt="banner"
      className='w-full h-full object-cover'
    />
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className='item rounded-[20px] overflow-hidden h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]'>
    <img 
      src="https://rukminim2.flixcart.com/fk-p-flap/3200/1560/image/994c5fd6b0edcc1f.jpg?q=60"
      alt="banner"
      className='w-full h-full object-cover'
    />
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className='item rounded-[20px] overflow-hidden h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]'>
    <img 
      src="https://rukminim2.flixcart.com/fk-p-flap/3200/1560/image/280787613f2db03d.png?q=60"
      alt="banner"
      className='w-full h-full object-cover'
    />
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className='item rounded-[20px] overflow-hidden h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]'>
    <img 
      src="https://rukminim2.flixcart.com/fk-p-flap/3200/1560/image/717f83a237ac82f4.png?q=60"
      alt="banner"
      className='w-full h-full object-cover'
    />
  </div>
</SwiperSlide>
      </Swiper>
        </div>

     </div>
  )
}

export default HomeSlider;