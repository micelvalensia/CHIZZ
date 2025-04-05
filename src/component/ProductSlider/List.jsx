import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import { TypeContext } from '../useContext/TypeContext'

function List() {
    const [active, setActive] = useState('All')
    const {type, setType} = useContext(TypeContext)
    const lists = ['All', 'Cheddar', 'Slice', 'Mozarella', 'Gouda']
  return (
    <motion.div 
    initial={{y: 100, opacity: 0}}
    whileInView={{y: 0, opacity: 1}}
    transition={{duration: 1.2}}
    viewport={{once: true}}
    className='flex gap-3 md:gap-10 w-full justify-center mt-10 mb-10'>

      {/* List di tiap typenya */}
      {lists.map((list, index) => (
        <button 
        key={index}
        onClick={() => {
          setActive(list)
          setType(list)
        }}
        className={`lg:px-10 px-3 border-white border-2 bg-transparent cursor-pointer py-2 text-xs lg:text-2xl rounded-full 
        ${active === list ? 'bg-white text-[#FFBC0F]' : 'text-[#ffffff]'}`}>
        {list}
        </button>
      ))}
      
    </motion.div>
  )
}

export default List
