import React from 'react'
import { IoMdTime } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
 const BlogItem = () => {
  return (
    <div className='blogItem group'>
        <div className='imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative'>
            <img src="https://serviceapi.spicezgold.com/download/1768444041168_premium_photo-1720744786849-a7412d24ffbf.jpg" alt="blogimage" className='w-full transition-all group-hover:scale-105 group-hover:rotate-1 '>
            
            </img>
            <span className='flex justify-center text-white items-center  absolute bottom-[15px] right-[15px] z-50 bg-[#ff5252] rounded-md p-1 text-[11px] font-500 gap-1'>
                <IoMdTime className='text-[16px]'/> 5 April 2023 
            </span>
        </div>

        <div className='info py-4'>
<h2 className='texxt-[15px] font-[500] text-black '>
    <Link to="/" className='link'>
    Nullam ullamcorper ornare molestie
    </Link>
</h2>
<p className='texxt-[12px] font-[400] text-[rgba(0,0,0,0.8)] mb-4'>
    Give2 lady of they such they sure it.....
</p>
<Link  className="link font-[500] text-[14px] flex items-center gap-1" to="/">Read More<IoIosArrowForward /></Link>
        </div>




    </div>
  )
}
export default BlogItem;
