import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const Login = () => {
    const [isShowPassword,setIsShowPassword]=useState(false);
    return (
        <section className="section py-10">
            <div className='container'>
                <div className='card shadow-md w-[500px] m-auto rounded-md bg-white p-5 px-10'>
                    <h3 className='text-center text-[18px] text-black font-[600]'>
                        Login to your account
                    </h3>

                    <form className='w-full mt-5'>
                        <div className='form-group w-full mb-5 relative'>

                            <TextField type="email" id="email" label="Email Id *" variant="outlined" className='w-full'/>
                        </div>
                         <div className='form-group w-full mb-5 relative'>

                            <TextField type={isShowPassword===false? 'password':'text'} id="password" label="Password *" variant="outlined" className='w-full'/>
                            <Button className='!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black 'onClick={()=>{setIsShowPassword(!isShowPassword)}}>
                                
                                
                                {
isShowPassword===false?  <IoMdEye className='text-[20px] opacity-75' />:  <IoMdEyeOff className='text-[20px] opacity-75' />

                                }
                               </Button>
                        </div>
                         <a className='link cursor-pointer text-[14px] font-[600] ' >
                          Forgot Password?
                            </a>
                            <div className='flex item-center w-full mt-3 mb-4'>
                                <Button className='btn-org btn-lg w-full '>Login</Button>
                            </div>
                            <p className=' mb-8 text-center'>Not Registered?<Link  className='lonk text-[14px] font-[600] pl-2 text-primary text-[#FF5252]' to="/register"> Sign Up</Link></p>

                           
                            <p className="text-center font-[500] mb-6">Or continue with Social account</p>


                            <Button className='flex gap-3 w-full !bg-[#f1f1f1] btn-lg !text-black'><FcGoogle  className="text-[20px]"/>Login with Google  </Button>
                    </form>
                </div>


            </div>

        </section>

    )
}

export default Login;