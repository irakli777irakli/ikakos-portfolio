import React, { useEffect } from 'react'
import { navItems } from '../helper/helper-utils'
import Link from 'next/link'
import { useGlobalContext } from '../context/context'

export default function NavContent({sidebar}) {


    const {bgColor,isOpen,setIsOpen} = useGlobalContext()



  return (
    <>
     {navItems.map((item,i)=>  <a key={i} onClick={()=> setIsOpen(false)} href={`#${item}`}><li className={`shrink font-kalam  ${sidebar ? "text-5xl" : " text-2xl"} font-semibold transition-colors ${bgColor ? "text-yellow-300" : "text-slate-200"}  `}>{item}</li></a>)}
    </>
  )
}
