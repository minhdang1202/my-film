import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination} from 'swiper'
import 'swiper/swiper-bundle.css' 
import './Testimonial.css'

SwiperCore.use([Navigation, Pagination]);

const Testimonial = () => {
    const slides = [];
    for(let i = 1 ; i<=3 ; i++){
        slides.push(
            <SwiperSlide key={`slide-${i}`} tag='li' className = 'testimonial-content'>
                    <div className = 'testimonial-data'>
                        <div className = 'testimonial-header'>
                            <img src = {`image/expert${i}.jpg`}></img>
                            <div className = 'testimonial-info'>
                                <h3>Ronaldo</h3>
                                <p>Client</p>
                            </div>
                        </div>
                    </div>
                    <p className = 'testimonial-description'>
                    I get a good impression, I carry out my project 
                    with all the possible quality and attention and support 24 hours a day.
                    </p>
            </SwiperSlide>
        )
    }
    return (
        <section className = 'testimonial' >
            <h1>Testimonial</h1>
            <span>My client saying</span>
            <Swiper tag='section' wrapperTag = 'ul' id = 'main'  pagination ={{ clickable: true } }
                slidesPerView = {2} spaceBetween = {2}
                loop 
                className = 'testimonial-container'
                >
                {slides} 
            </Swiper>
        </section>
    )
}

export default Testimonial
