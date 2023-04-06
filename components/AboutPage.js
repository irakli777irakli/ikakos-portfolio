import React, { useEffect } from 'react'
import Image from 'next/image'
import { techStack } from '../helper/helper-utils'
import TechStack from './TechStack'
import { useGlobalContext, useScrollHeight } from '../context/context'
import {BsSun,BsFillMoonFill} from 'react-icons/bs'


export default function AboutPage() {
  const slide = useScrollHeight();
  useEffect(()=>{

  },[slide]);


  const {bgColor,setBgColor,changeBgColor} = useGlobalContext();

  return (
    <section id='About' className=" flex relative items-center justify-center flex-wrap w-full mt-8 flex-col gap-14 ">
        <span onClick={()=> changeBgColor(!bgColor)} className={`absolute top-0 right-14  py-2 px-4 rounded-2xl cursor-pointer font-ubuntu text-lg font-semibold uppercase ${bgColor ? "bg-black text-gray-100 transition-all hover:bg-gray-100 hover:text-black" : "bg-gray-100 text-black transition-shadow hover:text-gray-100 hover:bg-black"}`}>
          {bgColor ? <BsSun /> : <BsFillMoonFill />}
          </span>
        <h1 className={`font-ubuntu mt-10 flex-1 text-5xl max-[960px]:text-3xl max-[486px]:text-2xl ${bgColor ? "text-stone-500": "text-green-500"} font-bold `}>Software Developer</h1>
        <div className={`${slide[0].ikakosPicture === false ? "opacity-0" : "opacity-1"}
        
        flex flex-1  flex-wrap items-center justify-around gap-4 max-[960px]:gap-6  ${slide[0].ikakosPicture ? "animate-slide" : ""} max-[700px]:flex-col`}>
            <div className="flex-1 flex-wrap flex items-center justify-center flex-col  gap-4">
                <h1 className={`text-center grow text-5xl font-ubuntu flex-1 max-[960px]:text-3xl max-[486px]:text-2xl font-bold ${bgColor ? "text-stone-500": "text-green-500"}`}>Hi! I'm Irakli</h1>
                <p className={`font-inter grow text-xl font-medium flex-1 max-[960px]:text-lg max-[486px]:text-md  text-center  ${bgColor ? "text-zinc-400": "text-lime-100"} `}>self motivated, disciplined individual with main focus in Full stack develpment</p>
            </div>
            <div className={`${bgColor ? "animate-rotateLight" : "animate-rotateDark" }
             relative rounded-[50%] overflow-hidden w-10 h-80 flex-1 flex items-center flex-wrap
              justify-center max-[700px]:flex-none max-[700px]:w-[15rem] max-[700px]:h-[15rem]`}>
                <Image src={'/ikako.jpg'} alt={'ikako'}  className={`object-cover`}  fill={true} priority={85} quality={95}/>
            </div>
        </div>
        <div className={`${slide[0].myStack ? "opacity-1" : "opacity-0"} flex flex-1 gap-10 flex-col flex-wrap ${slide[0].myStack ? "animate-slider" : ""}`}>
            <h1 className={`text-4xl text-center ${bgColor ? "text-stone-500": "text-green-500"} font-semibold max-[900px]:text-3xl max-[486px]:text-2xl`}>My stack and Skills</h1>
            <div className="flex gap-2 flex-wrap">
          <TechStack techStack={techStack}/>
            </div>
        </div>
    </section>
  )
}
