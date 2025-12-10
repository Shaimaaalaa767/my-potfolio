import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col items-center gap-12 py-16 border-y-2 border-y-gray-800  mt-16'>
        <h1 className=' text-4xl text-center bg-linear-to-r from-gray-400 to-gray-600  text-transparent  bg-clip-text md:text-8xl '>
            Tell me about your next project
        </h1>
        <a href="#" className='bg-gray-800 p-3 rounded-sm hover:scale-75 transition duration-200'>Get in touch</a>

    </div>
  )
}

export default Contact