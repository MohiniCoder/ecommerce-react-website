import React from 'react'
import HomeSlider from '../../components/HomeSlider';
import HomeCatSlider from '../../components/HomeCatSlider';
import { TbTruckDelivery } from "react-icons/tb";
import AdsBannerSlider from '../../components/AdsBannerSlider';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProductsSlider from '../../components/ProductsSlider';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';
import BlogItem from '../../components/BlogItem';
import Footer from '../../components/Footer';
import HomeSlider2 from '../../components/HomeSlider2';
const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <HomeSlider />
      {/* <section>
<div className='container flex items-center'>
  <div className='part1'>
      <HomeSlider2/>
      </div>
      </div>
      </section> */}
      <HomeCatSlider />
      <section className='bg-white py-8'>
        <div className='container'>
          <div className='flex item-center justify-between'>
            <div className='leftsec'>
              <h2 className='text-[20px] font-[600] '>Popular Products</h2>
              <p className='text-[15px] font-[400]'>
                Do nit miss the current offer untill the  end of januairy
              </p>

            </div>
            <div className='rightsec w-[60%]'>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable force tabs example"
              >
                <Tab label="Fashion" />
                <Tab label="Electronics" />
                <Tab label="Bags" />
                <Tab label="Footwear" />
                <Tab label="Groceries" />
                <Tab label="Beauty" />
                <Tab label="Wellness" />
                <Tab label="Jewellery" />

              </Tabs>

            </div>
          </div>
          <ProductsSlider items={6} />


        </div>

      </section>

      <section className='py-16 bg-white'>
        <div className='container'>


          <div className='freeShiping w-[80%] m-auto py-4 p-4 border-2 border-[#D28179] flex items-center justify-between rounded-sm mb-5'>
            <div className='col1 flex items-center gap-4'>
              <TbTruckDelivery className='text-[50px]' />
              <span className='text-[20px] font-[600] uppercase'>Free Shiping </span>
            </div>
            <div className='col2'>
              <p className='mb-0 '> Free  delivery Now on your First order and over RS.200 </p>
            </div>
            <p className='font-bold text-[25px]'>- Only RS.200*</p>
          </div>

          <AdsBannerSlider items={4} />
        </div>

      </section>

      <section className='py-5 pt-0 bg-white'>
        <div className="container">
          <h2 className="text-[20px] font-[600] ">
            Latest Products
          </h2>
          <ProductsSlider items={6} />
          <AdsBannerSlider items={4} />
        </div>
      </section>
      <section className='py-5 pt-0 bg-white'>
        <div className="container">
          <h2 className="text-[20px] font-[600] ">
            Featured Products
          </h2>
          <ProductsSlider items={6} />
          <AdsBannerSlider items={3} />
        </div>
      </section>
      <section className='py-5 pt-0 bg-white blogSection'>
        <div className="container">
          <h2 className="text-[20px] font-[600] mb-4 ">
          From The Blog
          </h2>
         <Swiper
                 slidesPerView={4}
                 spaceBetween={30}
                 
                 navigation={true}
                 modules={[Navigation]}
                 className="blogSlider"
               >
                  
                  <SwiperSlide>
                  <BlogItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                  <BlogItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                  <BlogItem/>
                  </SwiperSlide>

                  <SwiperSlide>
                  <BlogItem/>
                  </SwiperSlide>
                  <SwiperSlide>
                  <BlogItem/>
                  </SwiperSlide>
              </Swiper>
        </div>
      </section>
      <Footer/>
     
      
    </>
  )

}
export default Home;
