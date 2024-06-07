import React from 'react'
import { Link } from 'react-router-dom'

export default function ShopBranding() {
  return (
    <>
      <div className='shop-me flex items-center justify-center gap-[5rem] mt-8'>
        <div className='shopping'>
          <Link to='/Nike_&_Jorden'>
            SHOP NIKE & JORDEN
          </Link>
        </div>

        <div className='shopping adidas'>
          <Link to='/Adidas'>
            SHOP ADIDAS
          </Link>
        </div>

        <div className='shopping new_balance'>
          <Link to='/New_Balance'>
            SHOP NEW BALANCE
          </Link>
        </div>

        <div className='shopping puma'>
          <Link to='/Puma'>
            SHOP PUMA
          </Link>
        </div>
      </div>
    </>
  )
}