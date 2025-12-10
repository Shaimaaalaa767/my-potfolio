import React from 'react'
import { MdOutlineMessage } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className='flex justify-between border-b-2 border-gray-800 '>
        <div className='flex items-center  gap-4'>
        <div className='bg-gray-800 p-3 rounded-full my-2'>
            <MdOutlineMessage  className='text-xl '/>

        </div>
        <span>Get in touch</span>
        </div>
        <ul className='flex  items-center gap-4 text-2xl'>
            <li  className='cursor-pointer md:hidden  '><CiLinkedin /></li>
            <li className='cursor-pointer md:hidden '><CiYoutube /></li>
            <li className='cursor-pointer md:hidden '><FaGithub />
</li>
<li className='hidden md:block md:text-sm  after:content-["/"] after:ml-2'><a href="">LinkedIn</a></li>
<li className='hidden md:block md:text-sm after:content-["/"]  after:ml-2' ><a href="">YouTube</a></li>
<li className='hidden md:block md:text-sm'><a href="">GitHup</a></li>

        </ul>
    </nav>
  )
}

export default Nav