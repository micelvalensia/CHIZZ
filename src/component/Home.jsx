import React from 'react'
import Cheddar from './icons/Cheddar'
import Product from './Home/Product'
import Text from './Home/Text'
import Layout from './Layout/Layout'

function Home() {
  return (
    <Layout id={'home'}>
      <Cheddar />
      <div className="flex flex-col lg:flex-row lg:h-screen overflow-hidden">
        <Product />
        <Text />
      </div>
    </Layout>
  )
}

export default Home
