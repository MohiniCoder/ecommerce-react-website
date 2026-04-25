import React, { useState } from 'react';
import { Breadcrumbs, Button } from '@mui/material';
import Rating from '@mui/material/Rating';
import { QtyBox } from '../QtyBox';
import { MdOutlineShoppingCart } from "react-icons/md";
import {ProductZoom} from '../ProductZoom';
export const ProductDetailsComponent = () => {
      const [productActionIndex,setProductActionIndex]=useState(null);
  return (
    <> <div className='container flex gap-8'>
              
    
    
    <div className='productContent w-[60%] '>
      <h1 className="text-[25px] font-[600] mb-2 ">   
    Floral Print Fit & Flare Dress</h1>
    <div className='flex item-center gap-3 '>
      <span className="text-grey-400 text--[13px]">
    
    Brands: <span className="font-[500] text-black opacity-75">Fig
    
    </span>
     </span>
    
            <Rating name="size-small" defaultValue={4} size="small" readOnly />
            <span className='text-[13px] cursor-pointer '> Review(5)</span>
     
    
    </div>
    <div className='flex item-center gap-4 mt-4'>
      <span className="oldPrice line-through text-gray-500 text-[18px] font-[500]">$58.00
    </span>
     <span className="price text-[#FF5252] text-[18px] font-[600]">$58.00
    </span>
    <span className="text-[14px] ">
      Available In Stock:<span className='font-bold  text-green-500 text-[14px] ml-1'>
        145 Items
      </span>
      </span>
    
            
     
    
    </div>
    <br/>
    <p className='mt-3 pr-10 mb-5'>
      Fashion comes calling with chic women’s wear brand – Fig. From cool solids in pleasant hues to a medley of prints, you can find your choice in fashion statements here.
    </p>
    <div className='flex items-center gap-3'>
      <span className='text-[16px]'>Size:</span>
    <div className='flex items-center gap-1 actions'>
      <Button className={`${productActionIndex===0? '!bg-primary !text-white': ''}`} onClick={()=>setProductActionIndex(0)}>S</Button>
    <Button className={`${productActionIndex===1? '!bg-primary !text-white': ''}`} onClick={()=>setProductActionIndex(1)}>M</Button>
    <Button className={`${productActionIndex===2? '!bg-primary !text-white': ''}`} onClick={()=>setProductActionIndex(2)}>L</Button>
    <Button className={`${productActionIndex===3? '!bg-primary !text-white': ''}`} onClick={()=>setProductActionIndex(3)}>XL</Button>
    
    
    
    </div>
    </div>
    <p className='text-[14px] mt-4 mb-2'>
      Free Shipping (Est. Delivery Time 2-3 days )
    </p>
    <div className='flex items-center mt-4  gap-4'>
      <div className='qtyBoxWrapper w-[80px]'>
    
        <QtyBox/>
    
    
    
      </div>
    <Button className='btn-org flex gap-2'><MdOutlineShoppingCart className='text-[22px]'/>Add To Cart</Button>
    
    
    
      </div>
    
    
    
      </div>
    
    
            </div></>
  )
}

//21
