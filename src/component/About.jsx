import React from 'react'
import AboutPic from './About/AboutPic'
import AboutUs from './About/AboutUs'
import Layout from './Layout/Layout'

function About() {
  return (
    <Layout id={'about'}>
      <div className="w-full mx-auto h-[100%] bg-[#FAEAD0] pt-10">
        <div className="w-[90%] mx-auto flex flex-col md:flex-row pb-10">
            <AboutPic />
            <AboutUs />
        </div>
      </div>
    </Layout>
  )
}

export default About
