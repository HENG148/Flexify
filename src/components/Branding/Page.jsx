import React from 'react'
import Nike from '../../assets/Brand_logo/786NzPhpXo6G8hkutJkHTM-1200-80.png'
import Jordan from '../../assets/Brand_logo/Jumpman_logo.svg.png'
import Adidas from '../../assets/Brand_logo/Adidas_logo.png'
import Puma from '../../assets/Brand_logo/puma-logo-black-symbol-with-name-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.png'
import UnderArmour from '../../assets/Brand_logo/Under-Armour-logo.png'
import Vans from '../../assets/Brand_logo/Vans-Logo-1966.png'
import Converse from '../../assets/Brand_logo/Converse_logo.svg.png'

export default function Branding() {
  return (
    <>
      <div>
        <div>
          <p>Shop By Brand</p>
        </div>

        <div className='slider'>
          <div className='slide-track flex gap-[11rem]'>
            <div className='slide'>
              <img src={Nike} alt='Nike_Brand' width={120}/>
            </div>

            <div className='slide'>
              <img src={Jordan} alt='Jordan_Brand' width={120} />
            </div>

            <div className='slide'>
              <img src={Adidas} alt='Adidas_Brand' width={120} />
            </div>

            <div className='slide'>
              <img src={Puma} alt='Puma_Brand' width={120} />
            </div>

            <div className='slide'>
              <img src={UnderArmour} alt='UnderArmour_Brand' width={120} />
            </div>

            <div className='slide'>
              <img src={Vans} alt='Vans_Brand' width={120} />
            </div>

            <div className='slide'>
              <img src={Converse} alt='Converse_Brand' width={120} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
