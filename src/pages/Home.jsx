import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Men from './Men';
import Women from './Women';
import Kids from './Kids';
import Contacts from './Contacts';

function Home() {
  return (
    <>
    <section className='home'>
   <div className="container">
    <div className="row">
      <div className="col-lg-8">
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className='banner1'><img className='w-100' src="https://gumlet-images.assettype.com/afaqs%2F2020-08%2Fc4b2335d-bfce-4904-ab39-c3c0f0522186%2FCover.jpg?format=webp&w=480&dpr=2.6" alt="" />
        <div className='text1'><h1>For Men's</h1><p>This is best for men</p></div></div></SwiperSlide>
      <SwiperSlide><div className='banner1'><img className='w-100' src="https://st.depositphotos.com/2150573/4743/i/950/depositphotos_47439593-stock-photo-three-girls-posing-for-advertising.jpg" alt="" /><div className='text1'><h1>For women's</h1><p>This is best for women</p></div></div></SwiperSlide>
      <SwiperSlide><div className='banner1'><img className='w-100' src="https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/3981/article_full%403x.jpg" alt="" /><div className='text1'><h1>For Child's</h1><p>Best clothes for child</p></div></div></SwiperSlide>
    </Swiper>
      </div>
      <div className="col-lg-4">
      <div className='banner1'><img className='w-100 mb-2 bb' src="https://www.aarohee.in/wp-content/uploads/2022/11/1-97.jpeg" alt="" /><div className='text1'><h1 className='text1h1'>For Women</h1><p>Best clothes for women</p></div></div>
      <div className='banner1'><img className='w-100 mt-2 bb1' src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19351058/2022/8/17/f4fccf30-e569-4f4b-acbb-7ed400ce7bb51660721413517-Anayna-Womens-Printed-Tier-Dress-6161660721413030-1.jpg" alt="" /><div className='text1'><h1 className='text1h1'>For Women</h1><p>Best clothes for women</p></div></div>
      </div>
    </div>
   </div>
   </section>
   <Men/>
   <Women/>
   <Kids/>
   <Contacts/>
   </>
  )
}

export default Home

