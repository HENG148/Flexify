import React from 'react'
import Nike from '../../assets/Brand_logo/786NzPhpXo6G8hkutJkHTM-1200-80.png'
import Jordan from '../../assets/Brand_logo/Jumpman_logo.svg.png'
import Adidas from '../../assets/Brand_logo/Adidas_logo.png'
import Puma from '../../assets/Brand_logo/puma-logo-black-symbol-with-name-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.png'
import UnderArmour from '../../assets/Brand_logo/Under-Armour-logo.png'
import Vans from '../../assets/Brand_logo/Vans-Logo-1966.png'
import Converse from '../../assets/Brand_logo/Converse_logo.svg.png'

export default function Brand() {
  return (
    <>
      <div>
        <div className='logos flex'>
          <div className='logos-slide flex items-center gap-[15rem]'>
            <img src={Nike} alt='Nike' width={120} />
            <img src={Jordan} alt='Jordan' width={120} />
            <img src={Adidas} alt='Adidas' width={120} />
            <img src={Puma} alt='Puma' width={120} />
            <img src={UnderArmour} alt='UnderArmour' width={120} />
            <img src={Vans} alt='Vans' width={120} />
            <img src={Converse} alt='Converse' width={120} />
          </div>

          <div className='logos-slide flex items-center gap-[15rem]'>
            <img src={Nike} alt='Nike' width={120} />
            <img src={Jordan} alt='Jordan' width={120} />
            <img src={Adidas} alt='Adidas' width={120} />
            <img src={Puma} alt='Puma' width={120} />
            <img src={UnderArmour} alt='UnderArmour' width={120} />
            <img src={Vans} alt='Vans' width={120} />
            <img src={Converse} alt='Converse' width={120} />
          </div>
        </div>
      </div>
    </>
  )
}
