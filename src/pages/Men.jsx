import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Men() {
    return (
        <section>
            <div className="container">
                <h3 className="men">Men's Latest</h3>
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
                        <img src="https://d1fufvy4xao6k9.cloudfront.net/images/blog/posts/2023/12/thumb/hockerty_image_of_two_men_wearing_a_business_casual_look_at_the_2eb1ef7c-0a7e-4e94-828e-b72a30209a8f.png" alt="" />
                        <div><h3 className='menh3'>Classic Spring</h3><h5>$120.00</h5></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.pinimg.com/originals/9e/6c/a2/9e6ca2ad1dec47b06965cafa1e0c7052.png" alt="" />
                        <div><h3 className='menh3'>Classic Airforce</h3><h5>$160.00</h5></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.pinimg.com/originals/13/a3/5a/13a35a2ae41ee18ee317c26c50ae2c51.png" alt="" />
                        <div><h3 className='menh3'>Love Nana'20</h3><h5>$200.00</h5></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://img.lazcdn.com/g/p/62f4b6384f7b74b4f45b3247eec7b460.png_720x720q80.png" alt="" />
                        <div><h3 className='menh3'>Summer Clothe</h3><h5>$180.00</h5></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img clas src="https://fhsofficial.com/cdn/shop/files/3._January.png?v=1704103745" alt="" />
                        <div><h3 className='menh3'>Trauser</h3><h5>$180.00</h5></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://www.apetogentleman.com/wp-content/uploads/2022/01/business-casual-guide-2.jpg" alt="" />
                        <div><h3 className='menh3'>Love Nana'20</h3><h5>$100.00</h5></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img classsname="w-100" src="https://ae01.alicdn.com/kf/S4c5732dcad304af1ae856915ddf959a0G/2023-Men-s-Long-Sleeve-Multicolor-Music-Series-Casual-Fashion-Party-Soft-Comfortable-and-Versatile-Large.png" alt="" />
                        <div><h3 className='menh3'>classic spring</h3><h5>$130.00</h5></div>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </section>
    )
}

export default Men

