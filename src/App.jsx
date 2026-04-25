import './App.css';
import React, { useState } from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Header from './components/Header';
import Footer from './components/Footer';
import ProductListing from './Pages/Home/ProductListing';
import { ProductDetails } from "./Pages/Home/ProductDetails";
import  Login  from './Pages/Login';
import  Register  from './Pages/Register';
import {createContext} from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ProductZoom } from './components/ProductZoom';
import { IoCloseSharp } from "react-icons/io5";
import { ProductDetailsComponent } from './components/ProductDetails';


export const MyContext = createContext();
function App() {

  const [maxWidth, setMaxWidth] = React.useState('lg');
  const [fullWidth, setFullWidth] = React.useState(true);
 const [openProductDetailsModel, setOpenProductDetailsModel] = React.useState(false);

 

  const handleCloseProductDetailsModel = () => {
    setOpenProductDetailsModel(false);
  };
  const values={

setOpenProductDetailsModel



  }



  return (
    <>
    <BrowserRouter>
    <MyContext.Provider value={values}>
     <Header />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/productListing" exact={true} element={<ProductListing/>} />
          <Route path="/product/:id" exact={true} element={<ProductDetails/>} />
          <Route path="/login" exact={true} element={<Login/>} />
          <Route path="/register" exact={true} element={<Register/>} />
      </Routes>

      <Footer />
     </MyContext.Provider>
    </BrowserRouter>
 <Dialog
  open={openProductDetailsModel}
  fullWidth={fullWidth}
  maxWidth={maxWidth}
  onClose={handleCloseProductDetailsModel}
>
  <DialogContent>
    <div className="flex items-center w-full productDetailsModelContainer relative">

      <Button
        className='!w-[40px] !min-w-[40px] !h-[40px] !rounded-full !text-[#000] !absolute right-[15px] top-[15px] bg-[#f1f1f1] '
        onClick={handleCloseProductDetailsModel}
      >
        <IoCloseSharp className='text-[20px]' />
      </Button>

      <div className='col1 w-[40%] px-3'>
        <ProductZoom />
      </div>

      <div className="col2 w-[60%] py-8 px-16 productContent">
<ProductDetailsComponent/>


      </div>

    </div>
  </DialogContent>
</Dialog>
      </>
  );
}

export default App;
