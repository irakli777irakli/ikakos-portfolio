import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/context'
import {FaBars} from 'react-icons/fa'
import NavContent from './NavContent'
export default function Navbar() {


  const {bgColor,isOpen,setIsOpen} = useGlobalContext()

   

  return (
    <nav className={`flex items-center justify-center w-full h-16 transition-colors ${bgColor ? " bg-gradient-to-r from-stone-400 to-stone-700" : "bg-gradient-to-r from-slate-800 to-red-400"}`}>
        <div className='w-4/5 py-4'>
          <FaBars className="hidden text-4xl max-[500px]:inline" onClick={()=> setIsOpen(!isOpen)}/> 
            <ul className={`flex items-center justify-between max-[500px]:hidden`}>
               <NavContent />
            </ul>
            
        </div>
    </nav>
  )
}
