import React from 'react'
import { FaPenRuler } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa";

import { BsPaintBucket } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";


const Brands = () => {
  return (
    <section className='py-16'>
        <p className='text-3xl text-center bg-linear-to-r from-gray-400 to-gray-600  text-transparent  bg-clip-text'>
            Collabrate with brands and 
            <br/>
            agencies to create impactful results
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2  mt-8'>
                <div className='bg-gray-800 rounded-sm p-10'>
<FaPenRuler  className='mb-4 text-2xl'/>
<h2 className='font-bold mb-2'>Ui & Ux</h2>
<p>Desiging interface that are intuitive,efficient and enjoyable to use.</p>
                </div>

                           <div className='bg-gray-800 rounded-sm p-10'>
<FaLaptop className='mb-4 text-2xl'/>
<h2 className='font-bold mb-2'>Ui & Ux</h2>
<p>Desiging interface that are intuitive,efficient and enjoyable to use.</p>
                </div>

                    <div className='bg-gray-800 rounded-sm p-10'>
<BsPaintBucket className='mb-4 text-2xl'/>
<h2 className='font-bold mb-2'>Design & Creative</h2>
<p>Crafting visually design that connect with your audiance.</p>
                </div>


                    <div className='bg-gray-800 rounded-sm p-10'>
<FaLaptopCode  className='mb-4 text-2xl'/>
<h2 className='font-bold mb-2'>Development</h2>
<p>Bring your vision to life wuth the latest technology and design.</p>
                </div>     
            </div>
            
        
    </section>
  )
}

export default Brands