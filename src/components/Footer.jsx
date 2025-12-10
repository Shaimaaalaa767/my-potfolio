import React from 'react'
    import { CiLinkedin } from "react-icons/ci";
    import { CiYoutube } from "react-icons/ci";
    import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (

        <footer className='flex justify-between  pt-4 '>
            <div>
                <span>&copy; All Rights Reserved2025</span>
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
        </footer>
  )
}

export default Footer