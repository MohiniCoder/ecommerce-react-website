import React, { useState } from 'react';
import { Breadcrumbs, Button } from '@mui/material';
import { Link } from "react-router-dom";
import { ProductZoom } from "../../../components/ProductZoom";
import Rating from '@mui/material/Rating';
import { QtyBox } from '../../../components/QtyBox';
import { MdOutlineShoppingCart } from "react-icons/md";
import ProductsSlider from '../../../components/ProductsSlider';
import {ProductDetailsComponent} from "../../../components/ProductDetails";
export const ProductDetails = () => {



  const [activeTab,setActiveTab]=useState(0);
  return (
    <>
      <div className="py-5">

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
             <Link
              underline="hover"
              color="inherit"
              href="/"
              className='link transition'
            >
            
Floral Print Fit & Flare Dress
            </Link>
            {/* <Typography sx={{ color: 'text.primary' }}>Br
           <eadcrumbs</Typography> */}
          </Breadcrumbs>


        </div>


      </div>
      <section className='bg-white py-5' >
        <div className='container flex gap-8'>
          <div className='productZoomContainer w-[40%] '>
            <ProductZoom />
          </div>


<div className='productContent w-[60%] pr-10 pl-10'>
  <ProductDetailsComponent/>


  </div>




        </div>
<div className='container pt-10 '>
<div className='flex items-center gap-8 mb-5'>
  <span className={`link text-[17px] cursor-pointer font-[500] ${activeTab===0 && 'text-primary'}`} onClick={()=>setActiveTab(0)}>Description


  </span>
  <span className={`link text-[17px] cursor-pointer font-[500] ${activeTab===1 && 'text-primary'}`} onClick={()=>setActiveTab(1)}>Product Details</span>
<span className={`link text-[17px] cursor-pointer font-[500] ${activeTab===2 && 'text-primary'}`}onClick={()=>setActiveTab(2)}>
  Reviews
</span>
</div>




{


  activeTab===0 && (

<div className='shadow-md w-full p-5 rounded-md' >
  <p>Fashion comes calling with chic women’s wear brand – Fig. From cool solids in pleasant hues to a medley of prints, you can find your choice in fashion statements here.
    </p>
    <h4>Lightweight Design</h4>

</div>
)




}
{


  activeTab===1 && (



<div className="shadow-md w-full p-5 rounded-md">
  <div className="p-4 bg-gray-100">
    <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden mx-auto">
      
      <h2 className="text-2xl font-bold p-4 border-b">
        Kurti Product Details
      </h2>

      <table className="w-full text-left border-collapse">
        
        <thead className="bg-gray-200">
          <tr>
           
            <th className="p-3">Product Name</th>
            <th className="p-3">Size</th>
            <th className="p-3">Color</th>
            <th className="p-3">Price</th>
            <th className="p-3">Stock</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-t hover:bg-gray-50">
            
            

            <td className="p-3 font-medium">Floral Printed Kurti</td>
            <td className="p-3">M</td>
            <td className="p-3">Pink</td>
            <td className="p-3 text-green-600 font-semibold">₹899</td>

            <td className="p-3">
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-lg text-sm">
                In Stock
              </span>
            </td>

          </tr>
        </tbody>

      </table>
    </div>
  </div>
</div>
)

}

{

  activeTab===2 && (

<div className='shadow-md w-full py-5 px-8 rounded-md' >
  <div className="w-full productReviewsContainer">

  <h2 className='text-[18px]'> Customer Questions & answers</h2>
  {
  activeTab === 2 && (
    <div className='shadow-md w-full py-5 px-8 rounded-md'>

      {/* Heading */}
      <h2 className='text-[18px] font-[600] mb-4'>
        Customer Reviews
      </h2>

      {/* Rating Summary */}
      <div className='flex items-center gap-4 mb-6'>
        <Rating value={4.2} precision={0.5} readOnly />
        <span className='text-[14px] text-gray-600'>
          4.2 out of 5 (5 reviews)
        </span>
      </div>

      {/* Review List */}
      <div className='space-y-4 mb-8'>

        {/* Single Review */}
        <div className='border-b pb-3'>
          <div className='flex items-center justify-between'>
            <h4 className='font-[500]'>Rahul Patel</h4>
            <Rating value={4} size="small" readOnly />
          </div>
          <p className='text-[13px] text-gray-600 mt-1'>
            Very good quality dress. Comfortable and stylish.
          </p>
        </div>

        <div className='border-b pb-3'>
          <div className='flex items-center justify-between'>
            <h4 className='font-[500]'>Neha Shah</h4>
            <Rating value={5} size="small" readOnly />
          </div>
          <p className='text-[13px] text-gray-600 mt-1'>
            Loved the fabric and fitting. Worth the price!
          </p>
        </div>

      </div>

      {/* Add Review Form */}
      <div>
        <h3 className='font-[600] mb-2'>Write a Review</h3>

        <div className='flex flex-col gap-3'>

          <input
            type='text'
            placeholder='Your Name'
            className='border p-2 rounded-md outline-none'
          />

          <textarea
            placeholder='Write your review...'
            className='border p-2 rounded-md outline-none'
            rows={3}
          />

          <div className='flex items-center gap-3'>
            <span className='text-[14px]'>Your Rating:</span>
            <Rating />
          </div>

          <Button className='!bg-primary !text-white w-[150px]'>
            Submit Review
          </Button>

        </div>
      </div>

    </div>
  )
}


  </div>
</div>


  )
}




</div>

<div className='container mt-9'>
  <h2 className="text-[20px] font-[600] mt-2">Related Product


  </h2>
<ProductsSlider items={6} />

</div>
      </section>

    </>
  )
}
