import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading={'From 11.00am to 10.00pm'}
                heading={'Order Online'}
            >

            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img className='w-full' src={slide1} alt="" />
                    <h3 className="text-3xl -mt-16 text-center text-white font-bold uppercase">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={slide2} alt="" />
                    <h3 className="text-3xl -mt-16 text-center text-white font-bold uppercase">Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={slide3} alt="" />
                    <h3 className="text-3xl -mt-16 text-center text-white font-bold uppercase">Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={slide4} alt="" />
                    <h3 className="text-3xl -mt-16 text-center text-white font-bold uppercase">Deserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={slide5} alt="" />
                    <h3 className="text-3xl -mt-16 text-center text-white font-bold uppercase">Salads</h3>
                </SwiperSlide>
            </Swiper>

        </section>
    );
};

export default Category;