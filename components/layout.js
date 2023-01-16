import React from 'react'
import { useGlobalContext } from '../context/context'
import Sidebar from './Sidebar'
export default function Layout(props) {
    
    
    const {bgColor,isOpen} = useGlobalContext()
  return (
    <div className={`${bgColor ? "bg-amber-100" :  "bg-black"} transition-all w-full h-full relative`}>
    {!isOpen && props.children}
    {isOpen && <Sidebar />}
    </div>
  )
}
