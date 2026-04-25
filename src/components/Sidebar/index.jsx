import React, { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "../Sidebar/Style.css"
import { Collapse } from 'react-collapse';
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { Button } from '@mui/material';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Rating from '@mui/material/Rating';

const Sidebar = () => {
  const [isOpneCategoryFilter, setIsOpenCategoryFilter] = useState(true);
  const [isOpneAvailableFilter, setIsOpenAvailableFilter] = useState(true);
  const [isOpneSizeFilter, setIsOpneSizeFilter] = useState(true);



  return (
    <aside className='sidebar py-3'>

      <div className='box'>
        <h3 className='mb-3 w-full text-[16px] font-[600] flex items-center pr-5'>Shop By category
          <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]" onClick={() => setIsOpenCategoryFilter(!isOpneCategoryFilter)}>
            {

              isOpneCategoryFilter === true ? <FaAngleUp /> : <FaAngleDown />
            }


          </Button>
        </h3>
        <Collapse isOpened={isOpneCategoryFilter}>

          <div className='scroll px-4 relative -left-[13px]'>
            <FormControlLabel control={<Checkbox size="small" />} label="Fashion" className='w-full' />
            <FormControlLabel control={<Checkbox size="small" />} label="Electronics" className='w-full' />
            <FormControlLabel control={<Checkbox size="small" />} label="Bags" className='w-full' />
            <FormControlLabel control={<Checkbox size="small" />} label="Footwear" className='w-full' />
            <FormControlLabel control={<Checkbox size="small" />} label="Groceries" className='w-full' />
            <FormControlLabel control={<Checkbox size="small" />} label="Beauty" className='w-full' />
            <FormControlLabel control={<Checkbox size="small" />} label="Wellness" className='w-full' />
            <FormControlLabel control={<Checkbox size="small" />} label="Jewellery" className='w-full' />
          </div>
        </Collapse>
      </div>
      <div className='box'>
        <h3 className='mb-3 w-full text-[16px] font-[600] flex items-center pr-5'>Availability
          <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]" onClick={() => setIsOpenAvailableFilter(!isOpneAvailableFilter)}>
            {

              isOpneAvailableFilter === true ? <FaAngleUp /> : <FaAngleDown />
            }


          </Button>
        </h3>
        <Collapse isOpened={isOpneAvailableFilter}>

          <div className='scroll px-4 relative -left-[13px]'>
            <FormControlLabel control={<Checkbox size="small" />} label="Available(17)" className='w-full' />
            <FormControlLabel control={<Checkbox size="small" />} label="In Stock(18)" className='w-full' />


          </div>
        </Collapse>
      </div>
      <div className='box mt-4'>
        <h3 className='mb-3 w-full text-[16px] font-[600] flex items-center pr-5'>Size
          <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]" onClick={() => setIsOpneSizeFilter(!isOpneSizeFilter)}>
            {

              isOpneSizeFilter === true ? <FaAngleUp /> : <FaAngleDown />
            }


          </Button>
        </h3>
        <Collapse isOpened={isOpneSizeFilter}>

          <div className='scroll px-4 relative -left-[13px]'>
            <FormControlLabel control={<Checkbox size="small" />} label="Small" className='w-full' />
            <FormControlLabel control={<Checkbox size="small" />} label="Medium" className='w-full' />
            <FormControlLabel control={<Checkbox size="small" />} label="Large" className='w-full' />
            <FormControlLabel control={<Checkbox size="small" />} label="XL" className='w-full' />


          </div>
        </Collapse>
      </div>

      <div className='box mt-4'>
        <h3 className='mb-3 w-full text-[16px] font-[600] flex items-center pr-5'>Filter By Price

        </h3>
        <RangeSlider />
        <div className="flex pt-4 pb-2 priceRange">
          <span className='text-[13px]'>
            From: <strong className="text-dark">Rs: {100}</strong>
          </span>

          <span className="ml-auto text-[13px]">
            To: <strong className="text-dark">Rs: {50000}</strong>
          </span>
        </div>
      </div>
       <div className='box mt-4'>
        <h3 className='mb-3 w-full text-[16px] font-[600] flex items-center pr-5'>Filter By Rating

        </h3>
        <div className="w-full">
             <Rating name="size-small" defaultValue={5} size="small" readOnly />
        </div>
   <div className="w-full">
      <Rating name="size-small" defaultValue={4} size="small" readOnly />
      </div>
       <div className="w-full">
       <Rating name="size-small" defaultValue={3} size="small" readOnly />
       </div>
        <div className="w-full">
        <Rating name="size-small" defaultValue={2} size="small" readOnly />
        </div>
         <div className="w-full">
         <Rating name="size-small" defaultValue={1} size="small" readOnly />
         </div>

      </div>

    </aside>





  )

}

export default Sidebar;
