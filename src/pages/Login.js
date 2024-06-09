import React, { useState } from 'react'
import loginimg from '../assest/signin.gif'
import { FaRegEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ForgetPassword from './ForgetPassword';
const Login = () => {
    const [showPassword,setshowPassword] = useState('false');
  return (
    <section id='login' className=''>
      <div className='mx-auto container p-4'>
      <div className=' bg-white p-4 w-full max-w-sm mx-auto'>
       <div className='w-20 h-20 mx-auto'>
        <img src={loginimg} alt='Login' />
       </div>
       <form className='pt-4'>
        <div className='grid'>
            <label>Email</label>
           <div className='bg-slate-100 p-2'>
           <input type='email' placeholder='Enter Email' className='w-full h-full outline-none bg-transparent'/>
           </div>
        </div>
        <div>
            <label>Password</label>
            <div className='bg-slate-100 p-2 flex'>
            <input type={showPassword ? "text":"password"} placeholder='Enter password' className='w-full h-full outline-none bg-transparent'/>
            <div className='cursor-pointer' onClick={()=>setshowPassword((prev)=> !prev)
            }>
                <span>
                    {
                        showPassword ? (
                            <FaRegEyeSlash/>
                        ):(
                           <FaEye/>
                        )
                    }
                </span>
            </div>
            </div>
            <p>
                <Link to={'/forget-password'}className='block w-fit ml-auto hover:underline hover:text-red-600'>
                <ForgetPassword/>
                </Link>
            </p>
        </div>
       <button className='bg-red-500 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transtion-all mx-auto block m-6'>
        Login
       </button>

      </form>
      <p className='my-5'>Dont't have accoont?  <Link to={'/signin'} className='text-red-500 hover:text-red-800 hover:underline'>signin</Link> </p>

      </div>
      </div>
    </section>
  )
}

export default Login