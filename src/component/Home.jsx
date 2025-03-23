import React from 'react'
import Cheddar from './icons/Cheddar'
import Product from './Home/Product'
import Text from './Home/Text'

function Home() {
  return (
    <div className='mt-5 text-center lg:min-h-[100vh] w-[90%] mx-auto'>
      <Cheddar />
      <div className="flex flex-col lg:flex-row lg:h-screen">
        <Product />
        <Text />
      </div>
    </div>
  )
}

export default Home
