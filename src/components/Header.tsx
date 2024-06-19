import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='bg-[#00aeff] p-1'>
        <div className='rounded-[30px] max-w-[800px] mx-auto bg-[#008000] p-2 justify-center flex gap-3 text-white'>
            <Link to={'/'}>Home</Link>
            <Link to={'/products'}>Products</Link>
        </div>
    </div>
  )
}

export default Header