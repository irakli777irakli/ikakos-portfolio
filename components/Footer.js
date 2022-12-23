import Link from 'next/link'
import React from 'react'
import {AiFillTwitterSquare,AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
export default function Footer() {
  return (
    <footer id="Contact" className="w-full flex items-center justify-center mt-10 bg-gradient-to-r from-gray-900  to-slate-600">
        <div className="w-5/6 shrink flex-wrap flex items-center justify-around gap-6 p-8 max-[1024px]:flex-col">
            <div className="flex-1 flex-wrape">
                <p className="font-kalam text-lg font-semibold text-neutral-200">
                I strongly believe that I can achieve anything I want, if I put my mind to it.
                Just give me enough time and I will get it done.
                Because I know, that for a fact cause, I know who, I am as a man.
                </p>
            </div>
            <div className="flex-1">
                <div className="flex flex-wrap items-center justify-around gap-4 shrink bg-slate-300 py-6 px-24 rounded-sm">
                    <Link href={"https://twitter.com/L1Irakli"} target="_blank ">
                    <AiFillTwitterSquare  className="text-5xl transition-all  hover:text-sky-500"/>
                    </Link>
                    <Link href={"https://www.linkedin.com/in/irakli-lomtadze-9a853b246/?original_referer="} target="_blank">
                    <AiFillLinkedin className="text-5xl transition-all hover:text-sky-800"/>
                    </Link>
                    <Link href={"https://github.com/irakli777irakli"} target="_blank">
                    <AiFillGithub className="text-5xl opacity-70 transition-all hover:opacity-100"/>
                    </Link>
                </div>
            </div>
        </div>
    </footer>
  )
}
