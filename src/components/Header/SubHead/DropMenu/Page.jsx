import React from 'react'
import { Link } from 'react-router-dom'

export default function MainOption() {
  return (
    <>
      <div className='flex items-center justify-center bg-light-gray pt-1 pb-1'>
        <div className='flex gap-8 text-[1.2rem] font-medium font-main'>
          <Link>New Arrived</Link>
          <Link>Brands</Link>
          <Link>Men</Link>
          <Link>Women</Link>
          <Link>Kids</Link>
          <Link>Accessories</Link>
          <Link>Sneaker</Link>
          <Link>More Categories</Link>
        </div>
      </div>
    </>
  )
}
