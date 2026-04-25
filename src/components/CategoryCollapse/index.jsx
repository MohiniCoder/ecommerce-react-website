import React ,{ useState }from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { FaRegPlusSquare } from "react-icons/fa";
import { FiMinusSquare } from "react-icons/fi";

const CategoryCollapse = () => {
   const [submenuIndex, setSubmenuIndex] = useState(null);
      const [innersubmenuIndex, setinnerSubmenuIndex] = useState(null);



       const openSubmenu = (index) => {

        if (
            submenuIndex === index
        ) {
            setSubmenuIndex(null);
        } else {

            setSubmenuIndex(index)
        }
    }

    const openInnerSubmenu
        = (index) => {

            if (
                innersubmenuIndex === index
            ) {
                setinnerSubmenuIndex(null);
            } else {
                setinnerSubmenuIndex(index);
            }
        }
  return (
    
    <> <div className='scroll'>
                <ul className='w-full'>
                    <li className='list-none flex item-center relative flex-col'>
                        <Link to="/" className='w-full'
                        >
                        <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>Fashion</Button>
                        </Link>

                        {
                            submenuIndex === 0 ? ( <FiMinusSquare
                            className='absolute top-[10px] right-[15px] 
                               cursor-pointer'  onClick={() => openSubmenu(0)} /> ) :
                          (

                            <FaRegPlusSquare className='absolute top-[10px] right-[15px] 
                               cursor-pointer'  onClick={() =>openSubmenu(0)} />
                         )

                        }
                        {

                            submenuIndex === 0 &&
                            <ul className='submenu  w-full pl-3'>
                                <li className='list-none relative'>
                                    <Link to="/" className='w-full'
                                    >
                                        <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>Apparel</Button>
                                    </Link>
                                    {
                                        innersubmenuIndex === 0 ?
                                            (

                                                <FiMinusSquare
                                                    className='absolute top-[10px] right-[15px] 
                                                   cursor-pointer'  onClick={() =>
                                                        openInnerSubmenu(0)}
                                                />
                                            ) :
                                            (

                                                <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer ' onClick={() =>
                                                    openInnerSubmenu(0)}
                                                />
                                            )
                                    }

                                    {
                                        innersubmenuIndex === 0 &&



                                        <ul className='inner-submenu  w-full pl-3'>
                                            <li className='list-none relative mb-1 text-[14px] '>
                                                <Link to="/" className='link
                                                 w-full !text-left !justify-start !px-3'>Smart Tablet
                                                </Link>
                                                <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer ' />

                                            </li>
                                            <li className='list-none relative mb-1 text-[14px] '>
                                                <Link to="/" className='link
                                                     w-full !text-left !justify-start !px-3'>
                                                    Crepe T-shirt
                                                </Link>
                                                <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer ' />

                                            </li>
                                            <li className='list-none relative mb-1 text-[14px]'>
                                                <Link to="/" className='link
                                              w-full !text-left !justify-start !px-3'>
                                                    Leather Watch
                                                </Link>
                                            <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer ' />

                                            </li>
                                            <li className='list-none relative mb-1 text-[14px] '>
                                                <Link to="/" className='link
                                               w-full !text-left !justify-start !px-3'>
                                                    Rolling Diamond
                                                </Link>
                                                <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer ' />

                                            </li>
                                        </ul>
                                    }

                                </li>

                            </ul>
                        }

                        {/* submenu */}

                    </li>
                    <li className='list-none flex item-center relative flex-col'>
                        <Link to="/" className='w-full'
                        >
                        <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>out</Button>
                        </Link>

                        {
                            submenuIndex === 1? ( <FiMinusSquare
                            className='absolute top-[10px] right-[15px] 
                               cursor-pointer'  onClick={() => openSubmenu(1)} /> ) :
                          (

                            <FaRegPlusSquare className='absolute top-[10px] right-[15px] 
                               cursor-pointer'  onClick={() =>openSubmenu(1)} />
                         )

                        }
                        {

                            submenuIndex === 1 &&
                            <ul className='submenu  w-full pl-3'>
                                <li className='list-none relative'>
                                    <Link to="/" className='w-full'
                                    >
                                        <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>Apparel</Button>
                                    </Link>
                                    {
                                        innersubmenuIndex === 1 ?
                                            (

                                                <FiMinusSquare
                                                    className='absolute top-[10px] right-[15px] 
                                                   cursor-pointer'  onClick={() =>
                                                        openInnerSubmenu(1)}
                                                />
                                            ) :
                                            (

                                                <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer ' onClick={() =>
                                                    openInnerSubmenu(1)}
                                                />
                                            )
                                    }

                                    {
                                        innersubmenuIndex === 1 &&



                                        <ul className='inner-submenu  w-full pl-3'>
                                            <li className='list-none relative mb-1 text-[14px] '>
                                                <Link to="/" className='link
                                                 w-full !text-left !justify-start !px-3'>Smart Tablet
                                                </Link>
                                                <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer ' />

                                            </li>
                                            <li className='list-none relative mb-1 text-[14px] '>
                                                <Link to="/" className='link
                                                     w-full !text-left !justify-start !px-3'>
                                                    Crepe T-shirt
                                                </Link>
                                                <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer ' />

                                            </li>
                                            <li className='list-none relative mb-1 text-[14px]'>
                                                <Link to="/" className='link
                                              w-full !text-left !justify-start !px-3'>
                                                    Leather Watch
                                                </Link>
                                            <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer ' />

                                            </li>
                                            <li className='list-none relative mb-1 text-[14px] '>
                                                <Link to="/" className='link
                                               w-full !text-left !justify-start !px-3'>
                                                    Rolling Diamond
                                                </Link>
                                                <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer ' />

                                            </li>
                                        </ul>
                                    }
                                    
                                </li>

                            </ul>
                        }

                        {/* submenu */}

                    </li>
                </ul>
            </div></>
  )
}

export default CategoryCollapse;