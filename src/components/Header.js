import React from 'react'
import Logo from './Logo';
import { IoMdSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
 <header className='h-16 shadow-md bg-white'> 
  <div className='h-full flex items-center px-4 container  mx-auto justify-between'>
  <div className=''>
    <Link to={'/'}>
    <Logo w={90} h={50}/>
    </Link>
  </div>
  <div className=' flex items-center w-full justify-between max-w-sm border rounded-full focus focus-within:shadow pl-3'>
    <input type='text' placeholder='search' className='w-full outline-none '/>
  <div className='text-xl min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white' >
   <IoMdSearch />
  </div>
  </div>
  <div className='flex items-center gap-7'>
    <div className='text-3xl cursor-pointer'>
    <FaRegUserCircle/>
    </div>
    <div className='text-3xl relative'>
   <span>  <IoCartOutline/> </span>
   <div className='bg-red-500 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-1 -right-2'>
    <p className='text-xs'>0</p>
   </div>
    </div>

    <div className=''>
      <Link to={'login'} className='px-3 py-1 rounded-full bg-red-500 text-white hover:bg-red-700'>
        Login
      </Link>
    </div>
    
  </div>
  </div>
   </header>
  )
}

export default Header;