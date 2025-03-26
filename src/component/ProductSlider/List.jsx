import React, { useState } from 'react'
import { motion } from 'framer-motion'

function List() {
    const [active, setActive] = useState('All')
    const lists = ['All', 'Cheddar', 'Slice', 'Mozarella', 'Gouda']
  return (
    <motion.div 
    initial={{y: 100, opacity: 0}}
    whileInView={{y: 0, opacity: 1}}
    transition={{duration: 1.2}}
    viewport={{once: true}}
    className='flex gap-3 md:gap-10 w-full justify-center mt-10 mb-10'>
      {lists.map((list) => (
        <button 
        onClick={() => setActive(list)}
        className={`lg:px-10 px-3 border-white border-2 bg-transparent cursor-pointer py-2 text-xs lg:text-2xl rounded-full 
        ${active === list ? 'bg-white text-[#FFBC0F]' : 'text-[#ffffff]'}`}>
        {list}
        </button>
      ))}
    </motion.div>
  )
}

export default List
