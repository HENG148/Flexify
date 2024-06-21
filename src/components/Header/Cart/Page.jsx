import React from 'react'
import AddCart from './AddCart'
import LoveShoes from './LoveShoes'

export default function Cart() {
  return (
    <>
      <div className='flex items-center gap-6'>
        <div>
          <LoveShoes />
        </div>

        <div>
          <AddCart />
        </div>
      </div>
    </>
  )
}
