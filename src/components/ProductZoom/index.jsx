import React, { useState, useRef } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export const ProductZoom = () => {


  const [slideIndex ,setSlideIndex]=useState(0);
  const zoomSliderBig=useRef();
    const zoomSliderSml=useRef();


    const goto=(index)=>{

setSlideIndex(index);
zoomSliderSml.current.swiper.slideTo(index);
zoomSliderBig.current.swiper.slideTo(index);
    }
  return (
    <>
    <div className='flex gap-3'>

   <div className='slider w-[15%]'>

 <Swiper
 ref={zoomSliderSml}
 direction={'vertical'}
        slidesPerView={3}
        spaceBetween={10}
        
    navigation={true}
        modules={[Navigation]}
        className="zoomProductSliderThumbs h-[500px] overflow-hidden"
      >
        
        <SwiperSlide>
          <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex===0? 'opacity-1':'opacity-30'}`} onClick={()=>goto(0)}>
            <img src='https://www.jiomart.com/images/product/original/443018283_ltpink/floral-print-fit-flare-dress-model-443018283_ltpink-0-202305291106.jpg?im=Resize=(600,750)' className="w-full transition-all group-hover:scale-105"></img>

          </div>
        </SwiperSlide>
           <SwiperSlide>
          <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex===1? 'opacity-1':'opacity-30'}`}  onClick={()=>goto(1)}>
            <img src='https://www.jiomart.com/images/product/original/443018283_ltpink/floral-print-fit-flare-dress-model2-443018283_ltpink-2-202305291106.jpg?im=Resize=(80,956)' className="w-full transition-all group-hover:scale-105"></img>

          </div>
        </SwiperSlide>
           <SwiperSlide>
          <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex===2? 'opacity-1':'opacity-30'}`}   onClick={()=>goto(2)}>
            <img src='https://www.jiomart.com/images/product/original/443018283_ltpink/floral-print-fit-flare-dress-model3-443018283_ltpink-3-202305291106.jpg?im=Resize=(75,94)' className="w-full transition-all group-hover:scale-105"></img>

          </div>
        </SwiperSlide>
           <SwiperSlide>
         <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex===3? 'opacity-1':'opacity-30'}`}   onClick={()=>goto(3)}>
            <img src='https://www.jiomart.com/images/product/original/443018283_ltpink/floral-print-fit-flare-dress-model4-443018283_ltpink-4-202305291106.jpg?im=Resize=(600,750)' className="w-full transition-all group-hover:scale-105"></img>

          </div>
        </SwiperSlide>

        </Swiper>


   </div>
   <div className='zoomContainer w-[85%] h-[500px] overflow-hidden'>
    <Swiper
 ref={zoomSliderBig}
        slidesPerView={1}
        spaceBetween={0}
        navigation={false}
        
        
      >
         <SwiperSlide>      
      <InnerImageZoom
        zoomType="hover"
        zoomScale={2}
        src="https://www.jiomart.com/images/product/original/443018283_ltpink/floral-print-fit-flare-dress-model-443018283_ltpink-0-202305291106.jpg?im=Resize=(600,750)"
      />
      </SwiperSlide>
      <SwiperSlide>      
      <InnerImageZoom
  zoomType="hover"
  zoomScale={2}
  src="https://www.jiomart.com/images/product/original/443018283_ltpink/floral-print-fit-flare-dress-model2-443018283_ltpink-2-202305291106.jpg?im=Resize=(600,750)"
/>
      </SwiperSlide>
      <SwiperSlide>      
     <InnerImageZoom
  zoomType="hover"
  zoomScale={2}
  src="https://www.jiomart.com/images/product/original/443018283_ltpink/floral-print-fit-flare-dress-model3-443018283_ltpink-3-202305291106.jpg?im=Resize=(600,750)"
/>
      </SwiperSlide>
      <SwiperSlide>      
      <InnerImageZoom
  zoomType="hover"
  zoomScale={2}
  src="https://www.jiomart.com/images/product/original/443018283_ltpink/floral-print-fit-flare-dress-model4-443018283_ltpink-4-202305291106.jpg?im=Resize=(600,750)"
/>
      </SwiperSlide>
      </Swiper>
       </div>
       </div>
    </>
  );
};