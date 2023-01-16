import React from 'react'
import { useGlobalContext } from '../context/context'

export default function TechStack({techStack,project}) {

  const {bgColor} = useGlobalContext()

  return (
    <>
    {techStack.map((item,i)=>{
        return (
        <div key={i} className="flex flex-col grow p-2 items-center justify-center gap-2">
            <span className={`${project ? "text-4xl shadow-white" : "text-5xl   p-1 "} ${bgColor  ?  "bg-zinc-800" : "bg-green-800"} ${((item.name === "Nextjs" || item.name=== "Solidity") && bgColor === false) ? "bg-slate-200" : ""}`}>
              {item.symbol}
            </span>
            <p className={`${bgColor ? "text-slate-700" : "text-white"}`}>{item.name}</p>
        </div>
        )
    })}
    </>
  )
}
