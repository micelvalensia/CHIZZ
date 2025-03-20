import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Icons from './icons/Icons';

function Navbar() {
    const [active, setActive] = useState('Home');
    const list = ['Home', 'About', 'Categories', 'Contact'];

  return (
    <div className='w-full'>
        <div className="mx-auto w-[90%] flex items-center justify-between pt-8">
            <div className="relative">
                <div className="absolute w-[260%] left-[-100px] lg:left-[-160px] h-full z-[-1] bg-[#FFBC0F] rounded-full"></div>
                <h2 className='font-extrabold text-[2rem] lg:text-[3rem]'>CHIZ</h2>
            </div>
            <nav className="hidden md:block w-[80%]">
                <ul className='flex justify-around'>
                    {list.map((items, id) => (
                        <li key={id}>
                            <motion.a 
                            href={`#${items}`} 
                            layout 
                            onClick={() => setActive(items)}
                            whileHover={{ x: 10 }} // Geser teks saat hover
                            className={`relative text-2xl font-semibold p-2 px-4 transition-all duration-300
                                before:content-['→'] before:absolute before:left-[-20px] before:opacity-0 before:transition-all 
                                before:duration-300 hover:before:opacity-100 hover:before:translate-x-2 ${
                                active === items
                                    ? "bg-[#564C3F] text-[#FAEAD0] rounded-[20px]"
                                    : "text-[#656565]"
                                }`}>
                            {items}
                            </motion.a>
                        </li>
                    ))}
                </ul>
            </nav>
            <nav className='md:hidden'>
                <Icons />
            </nav>
        </div>
    </div>
  )
}

export default Navbar
