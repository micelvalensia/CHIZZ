import React from 'react'
import Layout from './Layout/Layout'
import ContactForm from './Contact/ConForm'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <Layout>
      <motion.h2
      initial={{y: 50, opacity: 0}}
      whileInView={{
        y: 0,
        opacity: 1
      }} 
      viewport={{once:true }}
      transition={{duration: 1.2 , ease: "easeInOut"}}
      className='judul'>Contact Us</motion.h2>
      <ContactForm />
    </Layout>
  )
}

export default Contact
