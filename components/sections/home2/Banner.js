'use client'
import { useState, useRef, useEffect } from 'react'
import React from 'react';
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 7000,
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
}

export default function Banner() {
    const [isOpen, setOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const videoRef = useRef(null)
    
    // Check screen size on component mount and resize
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        
        // Initial check
        checkScreenSize()
        
        // Add event listener for window resize
        window.addEventListener('resize', checkScreenSize)
        
        // Cleanup
        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])
    
    // Function to handle opening the video modal
    const handleOpenVideo = () => {
        setOpen(true)
    }
    
    // Function to handle closing the video modal
    const handleCloseVideo = () => {
        if (videoRef.current) {
            videoRef.current.pause()
        }
        setOpen(false)
    }

    return (
        <>
            <section className="main-slider main-slider-two" >
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    {/* Start Swiper Slide Single*/}
                    <SwiperSlide className="swiper-slide">
                        {/* Use vertical image for mobile, horizontal for desktop */}
                        <div className="call-to-action-one__bg">
          {/* Desktop Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="video-desktop"
          >
            <source src="/v-banner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Mobile Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="video-mobile"
          >
            <source src="/mv-banner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
                        <div className="main-slider-two__pattern"
                            style={{backgroundImage: 'url(assets/img/pattern/main-slider-v2-pattern.png)'}}></div>

                        <div className="main-slider-two__social-links">
                            <Link href="https://www.instagram.com/namkobuilders1" target="blank"><i className="fab fa-instagram"></i></Link>
                            {/* <Link href="#"><span className="icon-letter-v"></span></Link>
                            <Link href="#"><span className="icon-twitter"></span></Link>
                            <Link href="#"><span className="icon-dribbble"></span></Link> */}
                            <Link href="https://www.facebook.com/namkooceanviwe2016/" target="blank"><i className="fab fa-facebook-f"></i></Link>
                        </div>

                        <div className="container">
                            <div className="main-slider-two__single">
                                <div className="main-slider-two__content">
                                    <div className="big-title">
                                        <h2>NAMKO</h2>
                                    </div>
                                    <h2>Homes Designed <br/>
                                        for the Way You<br/> Live</h2>
                                    <div className="btn-box">
                                        <div className="btn-one">
                                            <Link className="thm-btn" href="/contact">
                                                <span className="txt">Discover More</span>
                                            </Link>
                                        </div>
                                        <div className="btn-two">
                                            <a onClick={handleOpenVideo} className="video-popup" style={{cursor: 'pointer'}}>
                                                <div className="main-slider-one__icon">
                                                    <i className="icon-play-button-1"></i>
                                                    <span>Watch Our Video</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/*End Swiper Slide Single */}
                    {/* Start Swiper Slide Single*/}
                    <SwiperSlide className="swiper-slide">
                        {/* Use vertical image for mobile, horizontal for desktop */}
                        <div 
                            className="image-layer" 
                            style={{
                                backgroundImage: isMobile 
                                    ? 'url(assets/img/slider/mob-banner.jpg)' 
                                    : 'url(assets/img/background/banner-main2.webp)'
                            }}
                        ></div>
                        <div className="main-slider-two__pattern"
                            style={{backgroundImage: 'url(assets/img/pattern/main-slider-v2-pattern.png)'}}></div>

                        <div className="main-slider-two__social-links">
                            <Link href="https://www.instagram.com/namkobuilders1" target="blank"><i className="fab fa-instagram"></i></Link>
                            {/* <Link href="#"><span className="icon-twitter"></span></Link>
                            <Link href="#"><span className="icon-dribbble"></span></Link> */}
                            <Link href="https://www.facebook.com/namkooceanviwe2016/" target="blank"><i className="fab fa-facebook-f"></i></Link>
                        </div>

                        <div className="container">
                            <div className="main-slider-two__single">
                                <div className="main-slider-two__content">
                                    <div className="big-title">
                                        <h2>NAMKO</h2>
                                    </div>
                                    <h2>Homes Designed <br/>
                                        for the Way You <br/>Live</h2>
                                    <div className="btn-box">
                                        <div className="btn-one">
                                            <Link className="thm-btn" href="/contact">
                                                <span className="txt">Discover More</span>
                                            </Link>
                                        </div>
                                        <div className="btn-two">
                                            <a onClick={handleOpenVideo} className="video-popup" style={{cursor: 'pointer'}}>
                                                <div className="main-slider-one__icon">
                                                    <i className="icon-play-button-1"></i>
                                                    <span>Watch Our Video</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/*End Swiper Slide Single */}
                </Swiper>
            </section>
            
            {/* Video Modal */}
            {isOpen && (
                <div className="video-modal-overlay" style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 9999,
                }}>
                    <div className="video-modal-content" style={{
                        position: 'relative',
                        width: '80%',
                        maxWidth: '800px',
                    }}>
                        <button 
                            onClick={handleCloseVideo}
                            style={{
                                position: 'absolute',
                                top: '-40px',
                                right: '0',
                                background: 'transparent',
                                border: 'none',
                                color: '#fff',
                                fontSize: '24px',
                                cursor: 'pointer',
                            }}
                        >
                            ×
                        </button>
                        <video 
                            ref={videoRef}
                            controls 
                            autoPlay 
                            style={{
                                width: '100%',
                                borderRadius: '8px',
                            }}
                        >
                            {/* Replace with your uploaded video path */}
                            <source src="/Namko builders.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
        </>
    )
}