import React from 'react'
import Link from 'next/link'
import { Poppins } from 'next/font/google';
import { LuClipboardList } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
const poppins= Poppins({
    subsets: ['latin'],
   weight: ["100",'200','300','400','500','600','700','800','900']
})
export default function Nav() {
  return (
    <div className='select-none flex w-full h-20 justify-around dark:text-white text-black bg-white dark:bg-slate-950 items-center'>
        <div className='text-2xl font-bold'>
            <Link href={"/"} className='flex space-x-2 justify-center items-center'><LuClipboardList /><span>Todo Listify</span></Link>
        </div>
        <div className='text-2xl font-bold'>
          <Link href={"/"}><FaGithub /></Link>
        </div>
    </div>
  )
}
