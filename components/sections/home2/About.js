'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import React from 'react';
import Link from "next/link"
import CounterUp from '@/components/elements/CounterUp';
import RunningText from '../home3/RunningText';

export default function About() {
    const [isOpen, setOpen] = useState(false)
    return (
        <> 

    {/*Start About Two */}
    <>

        <section className="about-two">
    <div className="container">
        <div className="row">
            {/*Start About Two Img */}
            <div className="col-xl-6">
                <div className="about-two__img">
                    <div className="about-two__img1 wow fadeInLeft" data-wow-delay="200ms"
                        data-wow-duration="1500ms">
                        <div className="inner">
                            <img src="assets/img/about/ab1.png" alt=""/>
                        </div>
                    </div>
                    <div className="about-two__img2 wow fadeInRight" data-wow-delay="200ms"
                        data-wow-duration="1500ms">
                        <img src="assets/img/project/7n.png" alt=""/>
                        <div className="about-two__video-btn">
                            <a onClick={() => setOpen(true)} className="about-two__icon video-popup" style={{cursor: 'pointer'}}>
                                <span className="icon-play-button-1"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/*End About Two Img */}

            {/*Start About Two Content */}
            <div className="col-xl-6">
                <div className="about-two__content">
                    <div className="sec-title">
                        <div className="sub-title">
                            <h5>KNOW ABOUT NAMKO</h5>
                        </div>
                        <h2>Excellence in Every Detail <br/>
                            </h2>
                    </div>

                    <div className="about-two__content-text">
                        <p>Our promise is simple: thoughtful planning, superior craftsmanship, and a living experience that reflects true excellence.</p>
                    </div>

                    <div className="about-two__content-list">
                        <ul>
                            <li>
                                <p><span className="icon-verified"></span> Smart designs tailored to your lifestyle</p>
                            </li>
                            <li>
                                <p><span className="icon-verified"></span> Built with care, built to last</p>
                            </li>
                            <li>
                                <p><span className="icon-verified"></span>Homes that feel welcoming every day</p>
                            </li>
                        </ul>
                    </div>
                    <div className="about-two__content-bottom">
                        <div className="btn-box">
                            <Link className="thm-btn" href="/about">
                                <span className="txt">Discover More</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/*End About Two Content */}
        </div>
    </div>
    
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
                    onClick={() => setOpen(false)}
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
                    controls 
                    autoPlay 
                    style={{
                        width: '100%',
                        borderRadius: '8px',
                    }}
                >
                    {/* Replace with your uploaded video path */}
                    <source src="assets/Namko builders 2 with audio out.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )}
</section>





<RunningText/>




 <section className="about-one about-one--about">
                    <div className="shape1 float-bob-y"><img src="assets/img/shape/about-v1-shape1.png" alt=""/></div>
                    <div className="container">
                        <div className="row">
                            {/*Start About One Img */}
                            <div className="col-xl-5 wow animated fadeInRight" data-wow-delay="0.1s">
                                <div className="about-one__img">
                                    <div className="inner">
                                        <img src="assets/img/about/h2.png" alt=""/>
                                    </div>
                                    <div className="experience-box">
                                        <div className="counter-box">
                                            <h2 className="count">
                                                <CounterUp end={14} />
                                            </h2>
                                            
                                        </div>
                                        <div className="text-box">
                                            <p>YEARS <br/>
                                                WORKIGN <br/>
                                                EXPERIENCE</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End About One Img */}

                            {/*Start About One Content */}
                            <div className="col-xl-7 wow animated fadeInLeft" data-wow-delay="0.1s">
                                <div className="about-one__content">
                                    <div className="sec-title">
                                        <div className="sub-title">
                                            <h5>About Company</h5>
                                        </div>
                                        <h2>Homes That Inspire </h2>
                                    </div>

                                    <div className="text-box">
                                        <p> From smart floor plans to premium finishes, we focus on the details that make everyday living truly exceptional.
                                             Every space is thoughtfully designed to bring comfort, style, and harmony to your home.</p>
                                    </div>

                                    <div className="about-one__content-progress">
                                        <div className="about-one__content-progress-single">
                                            <div className="title">
                                                <h4>Design</h4>
                                            </div>
                                            <div className="bar">
                                                <div className="bar-inner1 count-bar" data-percent="80%">
                                                    <div className="count-text">80%</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="about-one__content-progress-single mb0">
                                            <div className="title">
                                                <h4>Architect</h4>
                                            </div>
                                            <div className="bar">
                                                <div className="bar-inner2 count-bar" data-percent="90%">
                                                    <div className="count-text style2">90%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="about-one__content-bottom">
                                        <div className="about-one__content-bottom-author-box">
                                            <div className="btn-box">
                                                <Link className="thm-btn" href="about">
                                                    <span className="txt">Discover More</span>
                                                </Link>
                                            </div>

                                            {/* <div className="author-info">
                                                <div className="img-box">
                                                    <img src="assets/img/about/about-v1-img2.jpg" alt=""/>
                                                </div>
                                                <div className="signature-box">
                                                    <img src="assets/img/about/signature-1.png" alt=""/>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="text">
                                            <h4>Do you have any project on your mind? Call Us: <Link href="tel:123456789">+123
                                                    456789</Link></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End About One Content */}
                        </div>
                    </div>
                </section>
        </>
        </>
    )
}
