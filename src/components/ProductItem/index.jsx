import React ,{useContext}from 'react'
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import "../ProductItem/style.css";
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa";
import { MdZoomOutMap } from "react-icons/md";
import { MyContext } from '../../App';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { IoGitCompareOutline } from "react-icons/io5";
//in the gropup css is work when aplied to the parent
const ProductItem = () => {

  const context=useContext(MyContext);

  return (

    <div className='ProductItem group shadow-lg rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)]'>
      <div className='imgwrapper w-full h-[250px] overflow-hidden rounded-md relative'>
        <InnerImageZoom
          src="https://www.jiomart.com/images/product/original/443099366_magntafusha/women-printed-straight-kurta-model-443099366_magntafusha-0-202511191939.jpg?im=Resize=(600,750)"
          className='w-full'
          alt="product"
        />
        <span className='discount flex items-center  absolute  top-[10px] left-[10px] z-50 bg-[#ff5252] text-white rounded-lg p-1 text-[12px] font-[500]  '>10%

        </span>
      </div>

      <div className='info p-3 py-5 '>
        <h6 className='text-[13px]'>
          <Link to="/" className="link transition-all">
            Koskii
          </Link>
        </h6>

        <h3 className='text-[13px] title mt-1 font-[500] mb-1 text-[#000]'>
          <Link to="/" className="link transition-all">
            Polka Dots Printed Embroidered Saree
          </Link>
        </h3>

        <Rating name="size-small" defaultValue={4} size="small" readOnly />
        <div className='flex items-center gap-4'>
          <span className='oldPrice line-through text-gray-500 text-[15px]  font-[500]'>
            Rs.58.00


          </span>
          <span className='Price text-[#ff5252] font-[500] '>
            Rs.58.00

          </span>
          <div className='actions absolute flex items-center top-[15px] right-[5px] z-50 gap-2 flex-col w-[45px] transition-all duration-800 group-hover:top-[15px] opacity-0 group-hover:opacity-55'>
            <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !bg-white bg-[#ff5252] !text-black hover:text-white hover:!bg-[#ff5252] group" >
              <FaRegHeart className='text-[18px] text-black group-hover:text-white hover:!text-white' />
            </Button>
            <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !bg-white bg-[#ff5252] text-black hover:text-white hover:!bg-[#ff5252] group" onClick={()=>context.setOpenProductDetailsModel(true)} >
              <MdZoomOutMap className='text-[18px] !text-black group-hover:text-white hover:!text-white' />
            </Button>
            <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !bg-white bg-[#ff5252] text-black hover:text-white hover:!bg-[#ff5252] group" >
              <IoGitCompareOutline className='text-[18px] text-black group-hover:text-white hover:!text-white ' />
            </Button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
export {MyContext};
