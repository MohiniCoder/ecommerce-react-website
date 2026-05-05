import React, { useContext } from 'react'
import { Link } from "react-router-dom";
//import logo from "../../assets/1750047766437_logo.jpg";
import Search from '../Search';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation';
import { MyContext } from '../ProductItem';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',

  },
}));


const Header = () => {
  const context=useContext(MyContext);
  return (
  <header className='bg-white'>

  {/* TOP STRIP */}
  <div className="top-strip py-1 border-y">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        
        <div className="w-full md:w-[50%] text-center md:text-left">
          <p className="text-[12px] font-[500]">
            Get up to 50% off new season styles
          </p>
        </div>

        <div className="w-full md:w-auto">
          <ul className='flex justify-center md:justify-end gap-3 text-[12px]'>
            <li><Link to="/help-center">Help Center</Link></li>
            <li><Link to="/order-tracking">Order Tracking</Link></li>
          </ul>
        </div>

      </div>
    </div>
  </div>

  {/* MAIN HEADER */}
  <div className='header py-2 border-b'>
    <div className="container flex flex-col md:flex-row items-center gap-3">

      {/* LOGO */}
      <div className="w-full md:w-[25%] flex justify-center md:justify-start">
        <Link to={"/"}>
          <img 
            src="https://i.ibb.co/7dhLVVkC/Chat-GPT-Image-May-3-2026-08-02-42-PM.png"
            alt="Logo"
            className="h-[40px] md:h-[50px] object-contain"
          />
        </Link>
      </div>

      {/* SEARCH */}
      <div className="w-full md:w-[45%]">
        <Search />
      </div>

      {/* ICONS */}
      <div className="w-full md:w-[30%] flex justify-center md:justify-end">
        <ul className='flex items-center gap-3'>

          <li className='hidden sm:block'>
            <Link to="/login" className='text-[14px]'>Login</Link> |{" "}
            <Link to="/register" className='text-[14px]'>Register</Link>
          </li>

          <li>
            <Tooltip title="Compare">
              <IconButton size="small">
                <StyledBadge badgeContent={4} color="secondary">
                  <IoGitCompareOutline />
                </StyledBadge>
              </IconButton>
            </Tooltip>
          </li>

          <li>
            <Tooltip title="Wishlist">
              <IconButton size="small">
                <StyledBadge badgeContent={4} color="secondary">
                  <IoIosHeartEmpty />
                </StyledBadge>
              </IconButton>
            </Tooltip>
          </li>

          <li>
            <Tooltip title="Cart">
              <IconButton aria-label='cart' onClick={()=>context.setOpenCartPanel(true)}>
                <StyledBadge badgeContent={4} color="secondary">
                  <MdOutlineShoppingCart />
                </StyledBadge>
              </IconButton>
            </Tooltip>
          </li>

        </ul>
      </div>

    </div>
  </div>

  {/* NAVIGATION */}
  <Navigation />

</header>
  )
}

export default Header;
