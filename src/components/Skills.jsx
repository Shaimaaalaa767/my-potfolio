import React from 'react'
import js from '../assets/js.svg'
import html5 from '../assets/html5.svg'
import reactjs from '../assets/reactjs.svg'
import nextjs from '../assets/nextjs.svg'
import tailwindcss from '../assets/tailwindcss.svg'
import git from '../assets/git.svg'
import typescript from '../assets/typescript.svg'
import bootstrap from '../assets/bootstrap.svg'

const Skills = () => {
  return (
    <section>
      <h1 className='text-4xl text-center mb-16'>My Skills</h1>

      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 '>
        
        <div className="bg-gray-800 rounded-sm shadow-sm shadow-gray-600 flex p-4 h-48 ">
          <img className='w-full h-full' src={js} alt="" />
        </div>

        <div className="bg-gray-800 rounded-sm shadow-sm shadow-gray-600 flex p-4 h-48 ">
          <img className='w-full h-full' src={html5} alt="" />
        </div>

        <div className="bg-gray-800 rounded-sm shadow-sm shadow-gray-600 flex p-4 h-48 ">
          <img className='w-full h-full' src={reactjs} alt="" />
        </div>

        <div className="bg-gray-800 rounded-sm shadow-sm shadow-gray-600 flex p-4 h-48 ">
          <img className='w-full h-full' src={nextjs} alt="" />
        </div>

        <div className="bg-gray-800 rounded-sm shadow-sm shadow-gray-600 flex p-4 h-48 ">
          <img className='w-full h-full' src={tailwindcss} alt="" />
        </div>

        <div className="bg-gray-800 rounded-sm shadow-sm shadow-gray-600 flex p-4 h-48 ">
          <img className='w-full h-full' src={git} alt="" />
        </div>

        <div className="bg-gray-800 rounded-sm shadow-sm shadow-gray-600 flex p-4 h-48 ">
          <img className='w-full h-full' src={bootstrap} alt="" />
        </div>

        <div className="bg-gray-800 rounded-sm shadow-sm shadow-gray-600 flex p-4 h-48 ">
          <img className='w-full h-full' src={typescript} alt="" />
        </div>

      </div>
    </section>
  )
}

export default Skills
