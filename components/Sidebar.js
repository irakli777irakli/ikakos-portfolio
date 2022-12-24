import React, { useEffect,useState } from 'react'
import { useGlobalContext } from '../context/context'
import NavContent from './NavContent'
import {FaRegWindowClose} from 'react-icons/fa'
import { useWindowSize } from '../context/context'

// custom hook to track screen size change


export default function Sidebar() {


  const {bgColor,setIsOpen,isOpen} = useGlobalContext()

  const width = useWindowSize();
  if(width > 500){
    setIsOpen(false)
  }

  return (
    <aside className={`hidden max-[500px]:absolute max-[500px]:top-24 max-[500px]:left-0 max-[500px]:z-20 max-[500px]:w-full max-[500px]:h-96 max-[500px]:flex max-[500px]:items-center max-[500px]:justify-center ${bgColor ? "max-[500px]:bg-orange-300" :"max-[500px]:bg-black"}`}>
       <ul className={`w-5/6 h-5/6 ${bgColor ? "bg-gradient-to-l from-blue-500 to-zinc-500" : "bg-gradient-to-l from-red-500 to-zinc-500"} flex flex-col  items-center justify-around`}>

        <FaRegWindowClose className="hidden text-4xl max-[500px]:inline max-[500px]:self-start max-[500px]:ml-4" onClick={()=> setIsOpen(!isOpen)}/>
           <NavContent sidebar={true}/> 
          </ul>
    </aside>
  )
}
