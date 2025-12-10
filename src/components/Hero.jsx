import React from 'react'
import me from'../assets/me.jpg'
const Hero = () => {
  return (
    <section className='flex flex-col items-center gap-7 py-16'>
        <div className='w-56 rounded-full overflow-hidden h-56'> 
            <img src={me} alt="my image"  className='w-full h-full object-cover'/>
        </div>
        <span className='text-xl'>Hi,i'm Shaimaa</span>
        <p className='text-3xl text-center bg-linear-to-r from-gray-400 to-gray-600  text-transparent  bg-clip-text'>I’m a front-end developer with strong experience in React and Next.js.</p>
<a href="https://drive.google.com/file/d/1FT4kXbxi0nr8Ubk08Niz-vs6e9EUBD08/view?usp=drive_link" target="_blank" className='bg-gray-800 p-3 rounded-sm hover:scale-75 transition duration-200'>Resume</a>
        
    </section>
  )
}

export default Hero