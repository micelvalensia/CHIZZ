import React from 'react'

function Layout({children, id}) {
  return (
    <div className='md:min-h-[100vh] container mx-auto mt-5 text-center py-10' id={id}>
      {children}
    </div>
  )
}

export default Layout
