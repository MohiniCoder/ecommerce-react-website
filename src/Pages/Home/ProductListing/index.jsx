import React from 'react'
import Sidebar from '../../../components/Sidebar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ProductItem from "../../../components/ProductItem";
import Button from '@mui/material/Button';
import { IoGridSharp } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
const ProductListing = () => {
  return (
    <section className="py-5">  
     
     <div className='container'>

     
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/" className='link  transition'>
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/"
          className='link transition'
        >
        Fashion
        </Link>
        <Typography sx={{ color: 'text.primary' }}>
          </Typography>
         
      </Breadcrumbs>


     </div>

<div className='bg-white p-2 mt-4'>
<div className='container flex gap-3'>
<div className='sidebarWrapper w-[20%] h-full bg-white '>
<Sidebar/>
</div>


<div className="rightContent w-[80%]" >
  <div className='bg-[#f1f1f1] p-2 w-full mb-3 rounded-md flex items-center justify-between' >

<div className='col1 flex items-center gap-3 '>
  <Button className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] '><IoGridSharp className='text-[rgba(0,0,0,0.7)]'/></Button>
 <Button className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] '><LuMenu  className='text-[rgba(0,0,0,0.7)]'/></Button>


</div>

  </div>

  <div className="grid grid-cols-4 md:grid-cols-4 gap-3">

         <ProductItem/>
         <ProductItem/>
         <ProductItem/>
         <ProductItem/>
         <ProductItem/>
         <ProductItem/>
         <ProductItem/>
         <ProductItem/>


  </div>
</div>
</div>

      </div>
       
</section>
  )
}
export  default ProductListing;