import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Icons from './icons/Icons';

function Navbar() {
    const [active, setActive] = useState('Home');
    const list = ['Home', 'About', 'Categories', 'Contact'];

  return (
    <div className='w-full overflow-hidden'>
        <div className="mx-auto w-[90%] flex items-center justify-between pt-8">
            <div className="relative order-2 lg:order-1">
                <div className="absolute w-[260%] right-[-170px] lg:left-[-250px] h-full z-[-1] bg-[#FFBC0F] rounded-full"></div>
                <img src="./logoutama.png" alt="logo" className='w-[128px] h-[80px] lg:h-[100px] lg:w-full object-center object-cover' />
            </div>
            <nav className="hidden order-3   md:block w-[80%]">
                <ul className='flex justify-around'>
                    {list.map((items, id) => (
                        <li key={id}>
                            <motion.a 
                            href={`#${items.toLowerCase()}`} 
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
            <nav className='md:hidden order-1 md:order-2'>
                <Icons />
            </nav>
        </div>
    </div>
  )
}

export default Navbar
