import React, { useEffect, useState } from 'react'
import { projects } from '../helper/helper-utils'
import Image from 'next/image';
import TechStack from './TechStack';
import Link from 'next/link';
import {MdLiveTv} from 'react-icons/md'
import {AiFillGithub} from 'react-icons/ai'
import { useGlobalContext, useScrollHeight } from '../context/context';


export default function ProjectsPage() {

  const slide = useScrollHeight();
  useEffect(()=>{

  },[slide]);

  const {bgColor} = useGlobalContext();

  const [truncated,setTrucated] = useState(true);
  const [unTruncatedIndex,setUntruncatedIntex] = useState(null);
  const [whichSegmentIsSelected,setWhichSegmentIsSelected] = useState(null);
  const undoTruncate = (i,segment) => {
    setUntruncatedIntex(i)
    setTrucated(false);
    setWhichSegmentIsSelected(segment)
  };

  return (
    <section id='Projects' className=" flex flex-col items-center justify-center flex-wrap gap-10  mt-24 w-full">
      <h1 className={`text-4xl font-kalam font-bold spacing uppercase tracking-widest italic ${bgColor ? "text-stone-500" : "text-green-500" }`}>Projects</h1>
      <div className="flex items-start justify-center flex-wrap shrink gap-6 flex-col w-5/6 ">
      {projects.map((project,i)=> {
        const {name,webImg,liveLink,githubLink,technologies,projectDetails, projectDifficulties,mySolution,notableFeatures} = project;
        return <>
          <hr  className={`border-none ${i % 2 === 0 ? `w-full ${bgColor ? "bg-red-500" : "bg-purple-400"} ` : `w-4/5 ${bgColor ? "bg-violet-500" : "bg-purple-700"}`} h-1 `}/>
        <div key={i} className="flex gap-4 flex-wrap items-start shrink grow content-around max-[1024px]:flex-col">
          
          <div className={`${slide[0].projects ? "opacity-1": "opacity-0"}  flex flex-grow-3  flex-col items-start justify-start shrink grow gap-4 ${slide[0].projects ? "animate-projecPic" : ""}`}>
            <h1 className={`${bgColor ? "text-neutral-500" : "text-yellow-500"} font-inter" text-xl capitalize font-bold`}>{name}</h1>
            <div className="grow flex flex-wrap flex-col gap-4">
            <Image src={webImg} alt={name} width={900} height={200} className={` max-[1024px]:w-full`}/>
            <div className="flex items-center justify-around flex-wrap">
              <Link href={liveLink} target="_blank" className={`shrink flex gap-2 items-center justify-center ${bgColor ?"bg-stone-500" : "bg-emerald-500"} p-1 rounded-sm`}>
                Live <MdLiveTv /> 
                </Link>
              <Link href={githubLink} target="_blank" className={`shrink flex gap-2 items-center justify-center ${bgColor ?"bg-stone-500" : "bg-emerald-500"} p-1 rounded-sm`}>
                github <AiFillGithub />
                </Link>
            </div>
            </div>
            <div className="flex gap-6 flex-wrap justify-start items-start">
            <h5 className={`self-top font-bold font-inter ${bgColor ? "text-zinc-500" : "text-blue-400"}`}>Techologies Used</h5>
            <TechStack techStack={technologies} project={true}/>
            </div>
          </div>

          <div className={`${slide[0].projects ? "opacity-1" :  "opacity-0"} flex-grow-1 flex shrink flex-col gap-6 justify-start items-start ${slide[0].projects ? "animate-projectDesc": ""}`}>
            <div className="flex flex-1 flex-col gap-4">
              <h4 className="text-stone-500 font-bold text-2xl">Project Details</h4>
              <p className={`${bgColor ? "text-gray-500" : "text-stone-300"} text-xl`}>
                {((truncated === false) && (i === unTruncatedIndex) && ("projectDetails" === whichSegmentIsSelected) ) ? projectDetails : projectDetails.substring(0,100)}
                <span onClick={() => undoTruncate(i,"projectDetails")}>{((truncated === false) && (i === unTruncatedIndex) && ("projectDetails" === whichSegmentIsSelected) ) ? null :"..." }</span>
                </p>
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <h4 className="text-red-400 font-bold text-2xl">Project Difficulties</h4>
              <p className={`${bgColor ? "text-gray-600" : "text-stone-200"} text-xl`}>
                {((truncated === false) && (i === unTruncatedIndex) && ("projectDifficulties" === whichSegmentIsSelected)) ?  projectDifficulties : projectDifficulties.substring(0,100)}
                <span onClick={() => undoTruncate(i,"projectDifficulties")}>{((truncated === false) && (i === unTruncatedIndex) && ("projectDifficulties" === whichSegmentIsSelected) ) ? null :"..." }</span>
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-4">
            <h4 className="text-gray-600 font-bold text-2xl">My Solution</h4>
              <p className={`${bgColor ? "text-gray-600" : "text-stone-100"} text-xl`}>
                {((truncated === false) && (i === unTruncatedIndex) && ("mySolution" === whichSegmentIsSelected)) ? mySolution : mySolution.substring(0,100) }
                <span onClick={() => undoTruncate(i,"mySolution")}>{((truncated === false) && (i === unTruncatedIndex) && ("mySolution" === whichSegmentIsSelected)) ? null :"..."}</span>
              </p>
            </div>
            <div className="flex flex-1 gap-4 flex-col">
            <h4 className="text-slate-700 font-bold text-2xl">Notable Features</h4>
            <ul>
              {notableFeatures.map((feature,i)=>{
                return (
                  <li  className={`${bgColor ? "text-neutral-600" : "text-yellow-50"} text-lg capitalize font-semibold`} key={feature}>{i+1}. {feature}</li>
                )
              })}
              </ul>
            </div>
          </div>

        </div>
        </>
      })}
      </div>
    </section>
  )
}
