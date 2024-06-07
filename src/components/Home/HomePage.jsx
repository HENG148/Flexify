import React from 'react'
import MainHeader from '../Header/MainHeader'
import ImageSlider from '../ImageSlider'
import { SliderData } from '../../data/sliderData'
import ShopBranding from '../ShopBrand/Page'
import Branding from '../Branding/Page'
import Brand from '../Branding/Brand'
import ImageSlide from '../ImageSlide'
import MainOption from '../Header/SubHead/DropMenu/Page'
import AdsText from '../Header/SubHead/AdsText/AdsText'

export default function HomePage() {
  return (
    <div>
      <MainHeader />
      <div className='sub_Header'>
        <MainOption />
        <AdsText />
      </div>
      <ImageSlide />
    </div>
  )
}
