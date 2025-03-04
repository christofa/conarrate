import React from 'react'
import { FiSearch } from "react-icons/fi";
import { HiOutlineBell } from "react-icons/hi2";
// import { Avatar } from './ui/avatar';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';


function Navbar() {
  return (
    <div className='flex justify-end items-center gap-3'>
     <div className="relative w-full max-w-md">
      <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
      <input
        type="text"
        placeholder="Search..."
        className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div className='flex items-center gap-3 mr-3'>
    <HiOutlineBell size={33}/>
    <Avatar >
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    </div>
    </div>
  )
}

export default Navbar
