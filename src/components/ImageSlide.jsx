import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/style.css'
import { Autoplay, Pagination } from 'swiper/modules';
import slide1 from '../assets/images/240606-fl-rec8nBtUr-end-of-season-sale_01.jpg'
import slide2 from '../assets/images/240606-fl-reczdCtaB-crocs-naruto-1up.jpg'
import slide3 from '../assets/images/240528-fl-recRiDDDI-summer-clothing-1up.jpg'
import slide4 from '../assets/images/240601-fl-recyZk8Ea-retro-1-low-og-launch-en-1up.jpg'
import slide5 from '../assets/images/240603-fl-reclYRS5m-style-trend-nb-flo-milli-1up.jpg'

export default function ImageSlide() {

  const slides = [slide1, slide2, slide3, slide4, slide5];

  return (
    <>   
      <div className='w-[93%] ml-[4.5rem] h-[45rem]  mt-6'>
        <Swiper pagination={true} modules={[Pagination, Autoplay]} autoplay={{ delay: 5000 }} className="mySwiper">
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <img src={slide} alt='' />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
{/* {images.map((image, index) => (
  <SwiperSlide key={index}>
  <img src={image} alt={`Slide ${index + 1 }`} />
  </SwiperSlide>
))} */}
  {/* <SwiperSlide>
    <img src={ slide1 } alt='' width={180} />
  </SwiperSlide>
  <SwiperSlide>
    <img src={ slide2 } alt='' width={180} />
  </SwiperSlide>
  <SwiperSlide>
    <img src={ slide3 } alt='' width={180} />
  </SwiperSlide>
  <SwiperSlide>
    <img src={ slide4 } alt='' width={180} />
  </SwiperSlide>
  <SwiperSlide>
    <img src={ slide5 } alt='' width={180} />
  </SwiperSlide> */}