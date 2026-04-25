import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import CategoryCollapse from '../../CategoryCollapse';
import { IoCloseSharp } from "react-icons/io5";



const CategoryPannel = (props) => {


    const toggleDrawer = (newOpen) => () => {

        props.setISOpenCatPanel(newOpen);
    };


   

        const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" className="categoryPanel" >
            <h3 className='p-3 text-[16px] font-[500] flex items-center justify-between'>Shop By Categories<IoCloseSharp onClick={toggleDrawer(false)} className='cursor-pointer text-[20px]' /></h3>

            {/* for the dwawer it will happen  */}
           <CategoryCollapse/>


        </Box>
    );
    return (
        <>

            <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>


        </>
    )
}

export default CategoryPannel;