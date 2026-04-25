import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { GoRocket } from "react-icons/go";
import CategoryPannel from "./CategoryPannel";
import "./style.css";
import "../Navigation/style.css";
const Navigation = () => {


    const [isOpenCatPanel, setISOpenCatPanel] = useState(false);
    const openCategoryPanel = () => {

        setISOpenCatPanel(true);
    }
    return (
        <>
            <nav className='py-2'>
                <div className='container flex items-center justify-end gp-8'>
                    <div className='col-1 w-[20%]'>

                        <Button className='!text-black gap-2 w-full' onClick={openCategoryPanel}><RiMenu2Fill className='text-[18px]' />Shop by categories<LiaAngleDownSolid className='text-[13px] ml-auto font-bold' /> </Button>
                    </div>
                    <div className='col-2 w-[60%] '>
                        <ul className='flex items-center gap-3 nav'>
                            <li className='list-none'>
                                <Link to="/" className="link transition text-[14px] font-[500]">
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-3'>Home</Button></Link>
                            </li>
                            <li className='list-none relative'>
                                <Link to="/" className="link transition text-[14px] font-[500]"><Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-3'>Fashion</Button></Link>
                                <div className='submenu absolute top-[120%] left[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all'>
                                    <ul>
                                        
                                        <li className='list-none w-full relative'>
                                            <Link to="/" className='w-full'>
                                            <Button className='!text-[rgba(0.0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Men </Button>

                                             <div className='submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all'>
                                    <ul>
                                        
                                        <li className='list-none w-full'>
                                            <Link to="/" className='w-full'>
                                            <Button className='!text-[rgba(0.0,0,0.8)] w-full !text-left !justify-start !rounded-none'>T-shirt </Button>
                                            </Link>
                                        </li>
                                        <li className='list-none w-full'>
                                             <Link to="/" className='w-full'>
                                            <Button className='!text-[rgba(0.0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Jeans </Button>
                                            </Link>
                                        </li>
                                        <li className='list-none w-full'>
                                             <Link to="/" className='w-full'>
                                            <Button className='!text-[rgba(0.0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Footwear </Button>
                                            </Link>
                                        </li>
                                        <li className='list-none w-full'>
                                             <Link to="/" className='w-full'>
                                            <Button className='!text-[rgba(0.0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Watch </Button>
                                            </Link>
                                        </li>
                                        <li className='list-none w-full'>
                                             <Link to="/" className='w-full'>
                                            <Button className='!text-[rgba(0.0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Pents </Button>
                                            </Link>
                                        </li>

                                    </ul>

                                </div>
                                            </Link>
                                        </li>
                                        <li className='list-none w-full'>
                                             <Link to="/" className='w-full'>
                                            <Button className='!text-[rgba(0.0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Women </Button>
                                            </Link>
                                        </li>
                                        <li className='list-none w-full'>
                                             <Link to="/" className='w-full'>
                                            <Button className='!text-[rgba(0.0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Kids </Button>
                                            </Link>
                                        </li>
                                        <li className='list-none w-full'>
                                             <Link to="/" className='w-full'>
                                            <Button className='!text-[rgba(0.0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Girls </Button>
                                            </Link>
                                        </li>
                                        <li className='list-none w-full'>
                                             <Link to="/" className='w-full'>
                                            <Button className='!text-[rgba(0.0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Boys </Button>
                                            </Link>
                                        </li>

                                    </ul>

                                </div>

                            </li>
                            <li className='list-none'>
                                <Link to="/" className="link transition text-[14px] font-[500]"><Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-3'>Electronics</Button></Link>

                            </li>
                            <li className='list-none'>
                                <Link to="/" className="link transition text-[14px] font-[500]"><Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-3'>Bags</Button></Link>

                            </li>
                            <li className='list-none'>
                                <Link to="/" className="link transition text-[14px] font-[500]"><Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-3'>Footwear</Button></Link>

                            </li>
                            <li className='list-none'>
                                <Link to="/" className="link transition text-[14px] font-[500]"><Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-3'>Groceries</Button></Link>

                            </li>

                            <li className='list-none'>
                                <Link to="/" className="link transition text-[14px] font-[500]"><Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-3'>Beauty</Button></Link>

                            </li>
                            <li className='list-none'>
                                <Link to="/" className="link transition text-[14px] font-[500]"><Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-3'>Wellness</Button></Link>

                            </li>
                            <li className='list-none'>
                                <Link to="/" className="link transition text-[14px] font-[500]"><Button className='link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-3'>Jewellery</Button></Link>

                            </li>



                        </ul>
                    </div>
                    <div className='col-3 w-[20%]'>
                        <p className='fonr-[14px] font-500 flex items-center gap-3 mt-0 ml-0'>
                            <GoRocket className='text-[18px]' />Free Interntaional Delivery

                        </p>
                    </div>


                </div>
            </nav>
            {/* category pannel  */}
            <CategoryPannel openCategoryPanel={openCategoryPanel} isOpenCatPanel={isOpenCatPanel} setISOpenCatPanel={setISOpenCatPanel} />
        </>
    );
};
export default Navigation;