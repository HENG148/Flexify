import React from 'react'
import MainHeader from '../Header/MainHeader'
import ImageSlide from '../ImageSlide'
import MainOption from '../Header/SubHead/DropMenu/Page'
import AdsText from '../Header/SubHead/AdsText/AdsText'
import BrandSlide from '../BrandSlide'
import RecommendShoes from '../HomeShoes/recommend_Shoes/Page'
import BasketballShoes from '../HomeShoes/BasketballShoes/Page'
import PopularBrand from '../PopularBrand'
import Image from '../../assets/images/240113-fl-retro-1-hi-yellow-ochre-1up.png'
import NikePage from '../Sneaker/Nike/NikePage'

export default function HomePage() {
  return (
    <div className='h-[1000rem]'>
      <MainHeader />
      <div className='sub_Header'>
        <MainOption />
        <AdsText />
      </div>
      {/* <NikePage /> */}
      <ImageSlide />
      <BrandSlide />
      <div className='grid gap-y-12 ml-[4.5rem] mr-[3rem] mt-[3rem]'>
        <RecommendShoes />
        <BasketballShoes />
      </div>
      <div className='ml-[4.5rem] mt-12'>
        <PopularBrand />
      </div>
      <div>
        <img src={Image} alt='Poster' className='w-full mt-24'/>
      </div>
    </div>
  )
}
