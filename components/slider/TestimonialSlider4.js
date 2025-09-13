'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider4() {
    return (
        <>
            <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
                        

                        <div className="swiper-wrapper">

                            <SwiperSlide className="swiper-slide">
                                {/*Start Testimonials Two Single */}
                                <div className="testimonials-two__single">
                                    <div className="testimonials-two__single-top">
                                        <div className="img-box">
                                            <img src="assets/img/testimonial/testimonials-v2-img1.jpg" alt=""/>
                                        </div>

                                        <div className="icon-box">
                                            <span className="icon-quote"></span>
                                        </div>
                                    </div>

                                    <div className="testimonials-two__single-text">
                                        <p>Moving into my new apartment has been a wonderful experience. The quality of construction, 
                                            attention to detail, and thoughtful design make it feel truly special. 
                                            It’s more than just a home; it’s a place I look forward to coming back to every day.</p>
                                    </div>

                                    <div className="testimonials-two__single-bottom">
                                        <h3>Priya Sharma</h3>
                                        {/* <p>Designer</p> */}
                                    </div>
                                </div>
                                {/*End Testimonials Two Single */}
                            </SwiperSlide>

                            <SwiperSlide className="swiper-slide">
                                {/*Start Testimonials Two Single */}
                                <div className="testimonials-two__single">
                                    <div className="testimonials-two__single-top">
                                        <div className="img-box">
                                            <img src="assets/img/testimonial/testimonials-v2-img1.jpg" alt=""/>
                                        </div>

                                        <div className="icon-box">
                                            <span className="icon-quote"></span>
                                        </div>
                                    </div>

                                    <div className="testimonials-two__single-text">
                                        <p>The entire process, from exploring options to moving in, was smooth and stress-free. 
                                            The layouts are practical, the spaces feel airy,
                                             and the finishing touches really add a sense of comfort and style. </p>
                                    </div>

                                    <div className="testimonials-two__single-bottom">
                                        <h3>Rajesh Kumar</h3>
                                        {/* <p>Designer</p> */}
                                    </div>
                                </div>
                                {/*End Testimonials Two Single */}
                            </SwiperSlide>

                            <SwiperSlide className="swiper-slide">
                                {/*Start Testimonials Two Single */}
                                <div className="testimonials-two__single">
                                    <div className="testimonials-two__single-top">
                                        <div className="img-box">
                                            <img src="assets/img/testimonial/testimonials-v2-img1.jpg" alt=""/>
                                        </div>

                                        <div className="icon-box">
                                            <span className="icon-quote"></span>
                                        </div>
                                    </div>

                                    <div className="testimonials-two__single-text">
                                        <p>I love how every corner of the apartment has been planned carefully. The combination of functionality 
                                            and aesthetic appeal makes living here a pleasure. It’s a space that truly feels welcoming and warm. </p>
                                    </div>

                                    <div className="testimonials-two__single-bottom">
                                        <h3>Ananya Mehta</h3>
                                        {/* <p>Designer</p> */}
                                    </div>
                                </div>
                                {/*End Testimonials Two Single */}
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                {/*Start Testimonials Two Single */}
                                <div className="testimonials-two__single">
                                    <div className="testimonials-two__single-top">
                                        <div className="img-box">
                                            <img src="assets/img/testimonial/testimonials-v2-img1.jpg" alt=""/>
                                        </div>

                                        <div className="icon-box">
                                            <span className="icon-quote"></span>
                                        </div>
                                    </div>

                                    <div className="testimonials-two__single-text">
                                        <p>Moving into my new apartment has been a wonderful experience. The quality of construction, 
                                            attention to detail, and thoughtful design make it feel truly special. 
                                            It’s more than just a home; it’s a place I look forward to coming back to every day.</p>
                                    </div>

                                    <div className="testimonials-two__single-bottom">
                                        <h3>Priya Sharma</h3>
                                        {/* <p>Designer</p> */}
                                    </div>
                                </div>
                                {/*End Testimonials Two Single */}
                            </SwiperSlide>

                            <SwiperSlide className="swiper-slide">
                                {/*Start Testimonials Two Single */}
                                <div className="testimonials-two__single">
                                    <div className="testimonials-two__single-top">
                                        <div className="img-box">
                                            <img src="assets/img/testimonial/testimonials-v2-img1.jpg" alt=""/>
                                        </div>

                                        <div className="icon-box">
                                            <span className="icon-quote"></span>
                                        </div>
                                    </div>

                                    <div className="testimonials-two__single-text">
                                        <p>The entire process, from exploring options to moving in, was smooth and stress-free. 
                                            The layouts are practical, the spaces feel airy,
                                             and the finishing touches really add a sense of comfort and style. </p>
                                    </div>

                                    <div className="testimonials-two__single-bottom">
                                        <h3>Rajesh Kumar</h3>
                                        {/* <p>Designer</p> */}
                                    </div>
                                </div>
                                {/*End Testimonials Two Single */}
                            </SwiperSlide>

                            <SwiperSlide className="swiper-slide">
                                {/*Start Testimonials Two Single */}
                                <div className="testimonials-two__single">
                                    <div className="testimonials-two__single-top">
                                        <div className="img-box">
                                            <img src="assets/img/testimonial/testimonials-v2-img1.jpg" alt=""/>
                                        </div>

                                        <div className="icon-box">
                                            <span className="icon-quote"></span>
                                        </div>
                                    </div>

                                    <div className="testimonials-two__single-text">
                                        <p>I love how every corner of the apartment has been planned carefully. The combination of functionality 
                                            and aesthetic appeal makes living here a pleasure. It’s a space that truly feels welcoming and warm. </p>
                                    </div>

                                    <div className="testimonials-two__single-bottom">
                                        <h3>Ananya Mehta</h3>
                                        {/* <p>Designer</p> */}
                                    </div>
                                </div>
                                {/*End Testimonials Two Single */}
                            </SwiperSlide>
                        </div>
                    </Swiper>

        </>
    )
}
