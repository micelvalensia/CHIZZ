import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Icons({ onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (onClick) onClick();
  };

  useEffect(() => {
    if (isOpen) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
    
    return () => {
        document.body.style.overflow = "auto"; // Reset kalau komponen unmount
    };
}, [isOpen]);

  const list = ['Home', 'About', 'Categories', 'Contact']

  return (
    <>
        <button
        onClick={toggleMenu}
        className="w-[40px] h-[40px] relative z-[100] cursor-pointer flex flex-col justify-around"
        >
        {/* Line Atas */}
        <motion.span
            animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 14 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="w-full block bg-black h-[6px] rounded-full"
        ></motion.span>

        {/* Line Tengah (Menghilang saat X) */}
        <motion.span
            animate={{
            opacity: isOpen ? 0 : 1,
            }}
            transition={{ duration: 0.2 }}
            className="w-[50%] block bg-black h-[6px] rounded-full"
        ></motion.span>

        {/* Line Bawah */}
        <motion.span
            animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -14 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="w-full block bg-black h-[6px] rounded-full"
        ></motion.span>
        </button>

        <AnimatePresence>
            {isOpen && 
                <motion.div 
                initial={{y: -1000}}
                animate={{y: 0}}
                exit={{y: -1000}}
                transition={{duration: 0.5}}
                className="fixed z-[99] backdrop-blur-3xl w-full h-[100vh] top-0 left-0 shadow-lg">
                    <ul className="w-full h-full flex flex-col justify-evenly items-center">
                        {list.map((items, i) => (
                            <motion.li 
                            key={i} >
                                <motion.a 
                                whileTap={{backgroundColor: '#564C3F', 
                                borderRadius: '20px', 
                                padding: '8px', 
                                paddingLeft: '20px', 
                                paddingRight: '20px',
                                color: '#ffffff'}} href={`#${items.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-2xl w-full h-full font-semibold text-[#656565]">{items}</motion.a>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            }
        </AnimatePresence>
    </>
  );
}

export default Icons;
