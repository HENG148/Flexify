import React from 'react'
import { Link } from 'react-router-dom'

export default function MainOption() {
  return (
    <>
      <div className='flex items-center justify-center bg-primary-gray pt-2 pb-2'>
        <div className='flex gap-8 text-[1.2rem] font-medium font-main'>
          <Link to='/New_Arrived'
            className='oo'
          >New Arrived</Link>
          <Link to='/Brand' className='oo'>Brands</Link>
          <Link to='/Men' className='oo'>Men</Link>
          <Link to='/Women' className='oo'>Women</Link>
          <Link to='/Kids' className='oo'>Kids</Link>
          <Link to='/Accessories' className='oo'>Accessories</Link>
          <Link to='/Sneaker' className='oo'>Sneaker</Link>
          <Link to='/More_Categories' className='oo'>More Categories</Link>
        </div>
      </div>
    </>
  )
}
