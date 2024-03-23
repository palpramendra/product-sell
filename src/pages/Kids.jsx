import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Kids() {
  return (
    <section>
    <div className="container">
        <h3 className="men">Kid's Latest</h3>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={5}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <img src="https://images.meesho.com/images/products/260606772/cxz2e_512.webp" alt="" />
                <div><h3 className='menh3'>Classic Spring</h3><h5>$120.00</h5></div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://as2.ftcdn.net/v2/jpg/05/93/97/27/1000_F_593972766_NqODcN7TnatW5W9zxQG7fKuRNQwpIb7U.jpg" alt="" />
                <div><h3 className='menh3'>Classic Airforce</h3><h5>$160.00</h5></div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://i.pinimg.com/736x/2c/85/81/2c85819404b13dd868ee74e100f57de5.jpg" alt="" />
                <div><h3 className='menh3'>Love Nana'20</h3><h5>$200.00</h5></div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://assets0.mirraw.com/images/11701931/grey_front_long_webp.webp?1696935243" alt="" />
                <div><h3 className='menh3'>Summer Clothe</h3><h5>$180.00</h5></div>
            </SwiperSlide>
            <SwiperSlide>
                <img clas src="https://images.meesho.com/images/products/209435695/56avp_512.webp" alt="" />
                <div><h3 className='menh3'>Trauser</h3><h5>$180.00</h5></div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://5.imimg.com/data5/SG/DY/MY-2746980/boys-kids-dress-500x500.jpg" alt="" />
                <div><h3 className='menh3'>Love Nana'20</h3><h5>$100.00</h5></div>
            </SwiperSlide>
            <SwiperSlide>
                <img classsname="w-100" src="https://www.bangaloredesignerboutique.com/wp-content/uploads/2022/07/p5-1.jpg" alt="" />
                <div><h3 className='menh3'>classic spring</h3><h5>$130.00</h5></div>
            </SwiperSlide>
            
        </Swiper>
    </div>
</section>
  )
}

export default Kids
