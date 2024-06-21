import React from 'react'
import { Link } from 'react-router-dom'

export default function NikePage() {
  return (
    <>
      <div className='grid justify-items-center'>
        <div>
          <h2>Nike</h2>
          <p>Nike was founded in 1964 as Blue Ribbon Sports by Bill Bowerman and Phil Knight before officially adopting the name Nike Inc, in 1971. Its cultural relevance is undeniable, with sneaker transcending their athletic origin to become iconic symbol of fashion, sports and urban</p>
          <div>
            <Link to='/65'>
              <p>Read More</p>
            </Link>
          </div>
        </div>

        <div>
          
        </div>
      </div>
    </>
  )
}
