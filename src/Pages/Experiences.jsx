import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import PicTwo from '../assets/Pic2.jpg'
import PicThree from '../assets/Pic3.jpg'
import PicFour from '../assets/Pic4.jpg'
import PicFive from '../assets/Pic5.jpg'

const Experiences = () => {

    const responsive = {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        // when window width is >= 480px
        620: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        // when window width is >= 640px
        995: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        // when window width is >= 768px
        1240: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }

    return (
        <div className='px-14 py-10'>
            <div className='text-center text-4xl font-semibold py-5'>
                <h1>Experiences</h1>
            </div>
            <div>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Navigation]}
                    breakpoints={responsive}
                    className="mySwiper py-10"
                >
                    <SwiperSlide>
                        <div>
                            <img src={PicThree} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={PicTwo} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={PicThree} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={PicFour} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={PicFive} alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Experiences