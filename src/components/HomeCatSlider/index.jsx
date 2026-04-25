import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';
const HomeCatSlider = () => {
  return (
    <div className='homeCatSlider pt-4 py-8'>
        <div className='container'>
            <Swiper
        slidesPerView={8}
        spaceBetween={10}
        
    navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide>
            <Link to="/">
            <div className='item py-7 px-2 bg-white rounded-sm text-center flex items-center justify-center flex-col '>
                <img src="https://www.jiomart.com/images/product/original/rv3gkkmc4n/dmp-fashion-girl-s-rayon-printed-baby-pink-classy-top-product-images-rv3gkkmc4n-0-202406171726.jpg?im=Resize=(280,280)" className='w-[70px] transition-all'>
                </img>
                <h3 className=' text-[15px] font-[500] mt-3'>Fashion</h3>
            </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="/">
            <div className='item py-7 px-2 bg-white rounded-sm text-center flex items-center justify-center flex-col '>
                <img src="https://www.jiomart.com/images/product/original/rvofoh1lqy/anjo-9-in-1-combo-of-wired-keyboard-wired-mouse-pad-usb-hub-2-0-cleaning-kit-with-cloth-brush-100ml-extension-cable-1-5-meter-led-light-otg-micro-c-to-a-type-product-images-orvofoh1lqy-p605788178-0-202310251905.jpg?im=Resize=(280,280)" className='w-[70px] transition-all'>
                </img>
                <h3 className=' text-[15px] font-[500] mt-3'>Electronics</h3>
            </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="/">
            <div className='item py-7 px-2 bg-white rounded-sm text-center flex items-center justify-center flex-col '>
                <img src="https://serviceapi.spicezgold.com/download/1761905971086_file_1734525231018_bag.png" className='w-[70px] transition-all'>
                </img>
                <h3 className=' text-[15px] font-[500] mt-3'>Bag</h3>
            </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="/">
            <div className='item py-7 px-2 bg-white rounded-sm text-center flex items-center justify-center flex-col '>
                <img src="https://serviceapi.spicezgold.com/download/1761905982766_file_1734525239704_foot.png" className='w-[70px] transition-all'>
                </img>
                <h3 className=' text-[15px] font-[500] mt-3'>Footwear</h3>
            </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="/">
            <div className='item py-7 px-2 bg-white rounded-sm text-center flex items-center justify-center flex-col '>
                <img src="https://serviceapi.spicezgold.com/download/1761905996339_file_1734525248057_gro.png" className='w-[70px] transition-all'>
                </img>
                <h3 className=' text-[15px] font-[500] mt-3'>Groceries</h3>
            </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="/">
            <div className='item py-7 px-2 bg-white rounded-sm text-center flex items-center justify-center flex-col '>
                <img src="https://serviceapi.spicezgold.com/download/1761906005923_file_1734525255799_beauty(1).png" className='w-[70px] transition-all'>
                </img>
                <h3 className=' text-[15px] font-[500] mt-3'>Beauty</h3>
            </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="/">
            <div className='item py-7 px-2 bg-white rounded-sm text-center flex items-center justify-center flex-col '>
                <img src="https://serviceapi.spicezgold.com/download/1761906015678_file_1734525275367_well.png" className='w-[70px] transition-all'>
                </img>
                <h3 className=' text-[15px] font-[500] mt-3'>Wellness</h3>
            </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="/">
            <div className='item py-7 px-2 bg-white rounded-sm text-center flex items-center justify-center flex-col '>
                <img src="https://serviceapi.spicezgold.com/download/1761906025549_file_1734525286186_jw.png" className='w-[70px] transition-all'>
                </img>
                <h3 className=' text-[15px] font-[500] mt-3'>Jewellery</h3>
            </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="/">
            <div className='item py-7 px-2 bg-white rounded-sm text-center flex items-center justify-center flex-col '>
                <img src="https://serviceapi.spicezgold.com/download/1767337493085_20457.png" className='w-[70px] transition-all'>
                </img>
                <h3 className=' text-[15px] font-[500] mt-3'>Fashion</h3>
            </div>
            </Link>
        </SwiperSlide><SwiperSlide>
            <Link to="/">
            <div className='item py-7 px-2 bg-white rounded-sm text-center flex items-center justify-center flex-col '>
                <img src="https://serviceapi.spicezgold.com/download/1767337493085_20457.png" className='w-[70px] transition-all'>
                </img>
                <h3 className=' text-[15px] font-[500] mt-3'>Fashion</h3>
            </div>
            </Link>
        </SwiperSlide>
       
      </Swiper>

        </div>
      </div>
  )
}
export default HomeCatSlider;
