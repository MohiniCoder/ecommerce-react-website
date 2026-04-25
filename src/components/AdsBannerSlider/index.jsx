import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';
import BannerBox from '../BannerBox';
 const AdsBannerSlider= (props) => {
  return(
    


 <div className='py-5 w-full'>
            <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        
    navigation={true}
        modules={[Navigation]}
        className="smlBtn"
      >
        
        <SwiperSlide>
            
 <BannerBox img={'https://www.jiomart.com/images/cms/aw_rbslider/slides/1768568821_Harvest_Wellness_copy_14.jpg?im=Resize=(768,448)'} link={"/"}/>
        </SwiperSlide>
        <SwiperSlide>
            
 <BannerBox img={'https://www.jiomart.com/images/cms/aw_rbslider/slides/1768564985_Daily_Essentials.jpg?im=Resize=(768,448)' } link={"/"}/>
        </SwiperSlide>
        <SwiperSlide>
            
 <BannerBox img={'https://www.jiomart.com/images/cms/aw_rbslider/slides/1768385151_Harvest_Wellness.jpg?im=Resize=(768,448)'} link={"/"}/>
        </SwiperSlide>
        <SwiperSlide>
            
 <BannerBox img={'https://www.jiomart.com/images/cms/aw_rbslider/slides/1768385204_Kitchen_and_dining_HPMC_.jpg?im=Resize=(768,448)'} link={"/"}/>
        </SwiperSlide>
        <SwiperSlide>
            
 <BannerBox img={'https://www.jiomart.com/images/cms/aw_rbslider/slides/1768385303_Harvest_Wellness_copy_3.jpg?im=Resize=(768,448)'} link={"/"}/>
        </SwiperSlide>
        <SwiperSlide>
            
 <BannerBox img={'https://www.jiomart.com/images/cms/aw_rbslider/slides/1768573701_Harvest_Wellness_copy_18.jpg?im=Resize=(768,448)'} link={"/"}/>
        </SwiperSlide>
        <SwiperSlide>
            
 <BannerBox img={'https://www.jiomart.com/images/cms/aw_rbslider/slides/1768385472_Elevate_your_home_with_new_arrivals.jpg?im=Resize=(768,448)'} link={"/"}/>
        </SwiperSlide>
        <SwiperSlide>
            
 <BannerBox img={'https://www.jiomart.com/images/cms/aw_rbslider/slides/1768574101_Washing-Machines_1.jpg?im=Resize=(768,448)'} link={"/"}/>
        </SwiperSlide>
        <SwiperSlide>
            
 <BannerBox img={'https://www.jiomart.com/images/cms/aw_rbslider/slides/1768385717_Harvest_Wellness_copy_21.jpg?im=Resize=(768,448)'} link={"/"}/>
        </SwiperSlide>
        <SwiperSlide>
            
 <BannerBox img={'https://www.jiomart.com/images/cms/aw_rbslider/slides/1768385837_HPMC_-_632_368_copy_2_4.jpg?im=Resize=(768,448)'} link={"/"}/>
        </SwiperSlide>
        

</Swiper>
</div>
    
  
  )
}

export default AdsBannerSlider;