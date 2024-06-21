import React from 'react'
import a from '../assets/Brand-Image/jordansneakers 1.png'
import b from '../assets/Brand-Image/supreme 1.png'
import c from '../assets/Brand-Image/lv 1.png'
import d from '../assets/Brand-Image/fog 1.png'
import e from '../assets/Brand-Image/crocs 1.png'
import f from '../assets/Brand-Image/nike 1.png'
import { Link } from 'react-router-dom'

export default function PopularBrand() {
  return (
    <>
      <div>
        <div>
          <p className='text-[1.1rem] mb-6' >Popular Brand</p>
        </div>

        <div>
          <div className='flex gap-[4.5rem]'>
            {[
              { to: '/Jordan_Brand', src: a, alt: 'Jordan' },
              { to: '/Supreme_Brand', src: b, alt: 'Supreme' },
              { to: '/Louis_Vuitton_Brand', src: c, alt: 'Louis_Vuitton' },
              { to: '/essential_Brand', src: d, alt: 'Essential' },
              { to: '/Crocs-Brand', src: e, alt: 'Crocs' },
              { to: '/Nike_Brand', src: f, alt: 'Nike'}
            ].map((link, idx) => (
              <Link key={idx} to={link.to}>
                <img src={link.src} alt={link.alt} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
