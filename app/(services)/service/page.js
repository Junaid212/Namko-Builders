'use client'
import Layout from "@/components/layout/Layout"
import BrandSlider2 from '@/components/slider/BrandSlider2'
import Link from "next/link"
import { useState } from 'react'
import CounterUp from "@/components/elements/CounterUp"
export default function Home() {
   

    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Service Page">
                <div>
                     {/*Start About Three */}
            <section className="about-three">
                <div className="container">
                    <div className="row">
                        {/*Start About Three Img */}
                        <div className="col-xl-6">
                            <div className="about-three__img">
                                <div className="about-three__img1">
                                    <div className="inner">
                                        <img src="assets/img/about/about-v3-img1.jpg" alt=""/>
                                    </div>

                                    <div className="experience-box">
                                        <div className="counter-box">
                                            <h2 className="count"><CounterUp end={24} />
                                            </h2>
                                        </div>
                                        <div className="text-box">
                                            <p>YEARS <br/>
                                                WORKIGN <br/>
                                                EXPERIENCE</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="about-three__img2">
                                    <ul>
                                        <li>
                                            <div className="about-three__img2-single">
                                                <img src="assets/img/about/about-v3-img2.jpg" alt=""/>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="about-three__img2-single">
                                                <img src="assets/img/about/about-v3-img3.jpg" alt=""/>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*End About Three Img */}

                        {/*Start About One Content */}
                        <div className="col-xl-6">
                            <div className="about-one__content">
                                <div className="sec-title">
                                    <h2>Homes That Inspire</h2>
                                </div>

                                <div className="text-box">
                                    <p>From smart floor plans to premium finishes, we focus on the details that make everyday living truly exceptional.
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
                                            <Link className="thm-btn" href="/about">
                                                <span className="txt">Discover More</span>
                                            </Link>
                                        </div>

                                        <div className="author-info">
                                            <div className="img-box">
                                                <img src="assets/img/about/about-v1-img2.jpg" alt=""/>
                                            </div>
                                            <div className="signature-box">
                                                <img src="assets/img/about/signature-1.png" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text">
                                        <h4>Do you have any project on your mind? Call Us: <a href="tel:123456789">+91 81979 82888</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End About One Content */}
                    </div>
                </div>
            </section>
            {/*End About Three */}
                {/*Start Service Two */}
                <section className="service-two">
                    <div className="container">
                        <div className="row">
                            {/*Start Service Two Single */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div className="service-two__single">
                                    <div className="shape2"><img src="assets/img/shape/service-v2-shape2.png" alt=""/></div>
                                    <div className="service-two__single-bg"
                                        style={{backgroundImage: 'url(assets/img/service/service-v2-single-bg.jpg)'}}></div>
                                    <div className="service-two__single-icon">
                                        <span className="icon-construction-machine"></span>
                                    </div>
                                    <div className="service-two__single-text">
                                        <h2><Link href="/architecture">Residential Projects</Link></h2>
                                        <p>Modern homes designed for comfort, style, and everyday living.</p>
                                    </div>

                                    <div className="btn-box">
                                        <Link href="/architecture">EXPLORE SERVICE</Link>
                                    </div>
                                </div>
                            </div>
                            {/*End Service Two Single */}

                            {/*Start Service Two Single */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.3s">
                                <div className="service-two__single">
                                    <div className="shape2"><img src="assets/img/shape/service-v2-shape2.png" alt=""/></div>
                                    <div className="service-two__single-bg"
                                        style={{backgroundImage: 'url(assets/img/service/service-v2-single-bg.jpg)'}}></div>
                                    <div className="service-two__single-icon">
                                        <span className="icon-construction"></span>
                                    </div>
                                    <div className="service-two__single-text">
                                        <h2><Link href="/architecture">Commercial Spaces</Link></h2>
                                        <p>Functional and innovative business spaces crafted for success. </p>
                                    </div>

                                    <div className="btn-box">
                                        <Link href="/architecture">EXPLORE SERVICE</Link>
                                    </div>
                                </div>
                            </div>
                            {/*End Service Two Single */}

                            {/*Start Service Two Single */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.5s">
                                <div className="service-two__single">
                                    <div className="shape2"><img src="assets/img/shape/service-v2-shape2.png" alt=""/></div>
                                    <div className="service-two__single-bg"
                                        style={{backgroundImage: 'url(assets/img/service/service-v2-single-bg.jpg)'}}></div>
                                    <div className="service-two__single-icon">
                                        <span className="icon-interior-design"></span>
                                    </div>
                                    <div className="service-two__single-text">
                                        <h2><Link href="/architecture">Customized Solutions</Link></h2>
                                        <p>Tailor-made options to match your lifestyle and preferences.</p>
                                    </div>

                                    <div className="btn-box">
                                        <Link href="/architecture">EXPLORE SERVICE</Link>
                                    </div>
                                </div>
                            </div>
                            {/*End Service Two Single- */}
                        </div>
                    </div>
                </section>
                {/*End Service Two */}

                

                {/*Start Brand Two */}
                {/* <div className="brand-one brand-one--two about">
                    <div className="container">
                        <BrandSlider2/>
                    </div>
                </div> */}
                {/*End Brand Two  */}

                {/*Start Why Choose Us One */}
                {/* <div className="why-choose-us-one">
                    <div className="container">
                        <div className="row"> */}
                            {/*Start Why Choose Us One Img */}
                            {/* <div className="col-xl-6 wow animated fadeInRight" data-wow-delay="0.1s">
                                <div className="why-choose-us-one__img">
                                    <div className="shape1"><img src="assets/img/shape/why-choose-us-v1-shape1.png" alt=""/></div>
                                    <ul>
                                        <li>
                                            <div className="img-box">
                                                <img src="assets/img/resource/why-choose-us-v1-img1.jpg" alt=""/>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="img-box">
                                                <img src="assets/img/resource/why-choose-us-v1-img2.jpg" alt=""/>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                            {/*End Why Choose Us One Img */}

                            {/* Start Why Choose Us Content*/}
                            {/* <div className="col-xl-6 wow animated fadeInLeft" data-wow-delay="0.1s">
                                <div className="why-choose-us-one__content">
                                    <ul>
                                        <li>
                                            <div className="inner">
                                                <div className="icon-box">
                                                    <span className="icon-office-building"></span>
                                                </div>
                                                <div className="content-box">
                                                    <h2>Architecture Design</h2>
                                                    <p>Through a unique coN construction and design discipl
                                                        nes expertise Concor and delivers </p>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="inner">
                                                <div className="icon-box">
                                                    <span className="icon-bed"></span>
                                                </div>
                                                <div className="content-box">
                                                    <h2>The Joy of Best Living</h2>
                                                    <p>Through a unique coN construction and design discipl
                                                        nes expertise Concor and delivers </p>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="inner">
                                                <div className="icon-box">
                                                    <span className="icon-targeted"></span>
                                                </div>
                                                <div className="content-box">
                                                    <h2>Professional Planning</h2>
                                                    <p>Through a unique coN construction and design discipl
                                                        nes expertise Concor and delivers </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                            {/*End Why Choose Us Content */}
                        {/* </div>
                    </div>
                </div> */}
                {/*End Why Choose Us One */}

                {/*Start Service One */}
                <section className="service-one">
                    <div className="service-one__shape2" style={{backgroundImage: 'url(assets/img/shape/service-v1-shape2.png)'}}>
                    </div>
                    <div className="container">
                        <div className="sec-title text-center">
                            <div className="sub-title">
                                <h5>OUR SERVICE</h5>
                            </div>
                            <h2>Our Offerings</h2>
                        </div>
                        <div className="row">
                            {/*Start Service One Single */}
                            <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div className="service-one__single">
                                    <div className="shape1"><img src="assets/img/shape/service-v1-shape1.png" alt=""/></div>
                                    <div className="service-one__single-inner">
                                        <div className="count-text">01</div>
                                        <div className="icon-box">
                                            <span className="icon-construction"></span>
                                        </div>
                                        <div className="content-box">
                                            <h2><Link href="/architecture">General Contracting</Link></h2>
                                            <p>Through a unique combination of construction and design disciplines expertise,
                                                Concor and delivers world class</p>
                                            <div className="btn-box">
                                                <Link href="/architecture">EXPLORE SERVICE</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End Service One Single */}

                            {/*Start Service One Single */}
                            <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.2s">
                                <div className="service-one__single">
                                    <div className="shape1"><img src="assets/img/shape/service-v1-shape1.png" alt=""/></div>
                                    <div className="service-one__single-inner">
                                        <div className="count-text">02</div>
                                        <div className="icon-box">
                                            <span className="icon-construction-machine"></span>
                                        </div>
                                        <div className="content-box">
                                            <h2><Link href="/architecture">Machine Design</Link></h2>
                                            <p>Through a unique combination of construction and design disciplines expertise,
                                                Concor and delivers world class</p>
                                            <div className="btn-box">
                                                <Link href="/architecture">EXPLORE SERVICE</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End Service One Single */}

                            {/*Start Service One Single */}
                            <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div className="service-one__single">
                                    <div className="shape1"><img src="assets/img/shape/service-v1-shape1.png" alt=""/></div>
                                    <div className="service-one__single-inner">
                                        <div className="count-text">03</div>
                                        <div className="icon-box">
                                            <span className="icon-check-list"></span>
                                        </div>
                                        <div className="content-box">
                                            <h2><Link href="/architecture">Project Planing</Link></h2>
                                            <p>Through a unique combination of construction and design disciplines expertise,
                                                Concor and delivers world class</p>
                                            <div className="btn-box">
                                                <Link href="/architecture">EXPLORE SERVICE</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End Service One Single */}

                            {/*Start Service One Single */}
                            <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.2s">
                                <div className="service-one__single">
                                    <div className="shape1"><img src="assets/img/shape/service-v1-shape1.png" alt=""/></div>
                                    <div className="service-one__single-inner">
                                        <div className="count-text">04</div>
                                        <div className="icon-box">
                                            <span className="icon-interior-design"></span>
                                        </div>
                                        <div className="content-box">
                                            <h2><Link href="/architecture">Interior Design</Link></h2>
                                            <p>Through a unique combination of construction and design disciplines expertise,
                                                Concor and delivers world class</p>
                                            <div className="btn-box">
                                                <Link href="/architecture">EXPLORE SERVICE</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End Service One Single */}
                        </div>
                    </div>
                </section>
                {/*End Service One */}

               {/*Start Call To Action One */}
                <section className="call-to-action-one">
                    <div className="call-to-action-one__bg"
                        style={{backgroundImage: 'url(assets/img/background/call-to-action-v1-bg.jpg)'}}></div>
                    <div className="container">
                        <div className="call-to-action-one__inner">
                            <div className="call-to-action-one__content text-center">
                                <h2> Make Your Dream Home a Reality</h2>
                                <h3>Don’t Hesitate to Say Hello </h3>
                                <div className="btn-box">
                                    <a className="thm-btn" href="#">
                                        <span className="txt">ENQUIRE NOW</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*End Call To Action One */}

                </div>

            </Layout>
            <style>{`
            .feauture-three{
            padding:120px 0px 120px;
            }

            
            `}</style>
        </>
    )
}