import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  let Links =[
    {name:"About",link:"#about"},
    {name:"Events",link:"#events"},
    {name:"Contact",link:"#footer"},
    {name:"Register",link:"/register"},
    
  ];
  let [open,setOpen]=useState(false);
return (
  <div className='shadow-md w-full relative top-0 left-0'>
    <div className='md:flex relative items-center justify-around bg-white py-4 md:px-10 px-7'>
    <div className='font-bold text-2xl cursor-pointer flex items-center  
    text-gray-800'>
      <span className='text-4xl flex justify-center items-center gap-4  mr-1 pt-2'>
      <img width={70} height={70} src='/logo_logo.png'/>
      24
      </span>
      
    </div>
    
    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-10 cursor-pointer md:hidden'>
    <FaBars/>
    </div>

    <ul className={`md:flex md:items-center md:pb-0 pb-12 bg-white absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
      {
        Links.map((link)=>(
          <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
            <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
          </li>
        ))
      }
    </ul>
    </div>
  </div>
)
}

export default Nav