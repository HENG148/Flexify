import React from 'react'
import MainHeader from '../Header/MainHeader'
import ImageSlider from '../ImageSlider'
import { SliderData } from '../../data/sliderData'

export default function HomePage() {
  return (
    <div>
      <MainHeader />
      <div className='w-[100rem] mt-8 '>
        <ImageSlider images={SliderData} />
      </div>
    </div>
  )
}
