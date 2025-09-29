'use client'
import Link from "next/link"
import TestimonialSlider4 from '@/components/slider/TestimonialSlider4'
import BrandSlider2 from '@/components/slider/BrandSlider2'
import Layout from "@/components/layout/Layout"
import CounterUp from "@/components/elements/CounterUp"
import FeautureTwo from "@/components/sections/home1/FeautureTwo"
import AmenitiesSection from "@/components/sections/home2/AmenitiesSection"
import VisionMissionPage from "@/components/sections/home3/VisionMissionPage"
import Features from "@/components/sections/home2/Features"

export default function Home() {
    
    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="About Us">
                <div>
                {/*Start About One */}
                <section className="feauture-three">
                    <div className="shape1 float-bob-y"><img src="assets/img/shape/feauture-v3-shape1.png" alt=""/></div>
                    <div className="container">
                        <div className="row">
                            {/*Start Feauture Three Img */}
                            <div className="col-xl-5 wow animated fadeInLeft" data-wow-delay="0.1s">
                                <div className="feauture-three__img">
                                    <div className="inner clearfix">
                                        <img src="assets/img/project/4.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                            {/*End Feauture Three Img */}

                            {/*Start Feauture Three Content */}
                            <div className="col-xl-7">
                                <div className="feauture-three__content">
                                    <div className="sec-title">
                                        <div className="sub-title">
                                            <h5>Building Homes, Shaping Lives</h5>
                                        </div>
                                        <h2>Who We Are <br/>
                                            </h2>
                                    </div>

                                    <div className="text-box">
                                        <p> We build homes that bring together good quality, comfort, and style. Every home is 
                                            carefully planned to suit today’s lifestyle. From the structure to the small details,
                                             we make sure everything is done with care. Our designs are made to be useful, while
                                              also looking beautiful. We always keep our customers in mind, creating spaces that 
                                              truly feel like home. With us, you get more than just a house – you get a place
                                               filled with warmth and comfort</p>
                                    </div>
                                    <div className="btn-box">
                                        <Link className="thm-btn" href="#">
                                            <span className="txt">Discover More</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/*End Feauture Three Content */}
                        </div>
                    </div>
                </section>
                {/*End About One */}
{/* <FeautureTwo/> */}
<VisionMissionPage/>

<Features />
<section className="about-three">
                <div className="container">
                    <div className="row">
                        {/*Start About Three Img */}
                        <div className="col-xl-6" >
                            <div className="about-three__img">
                                <div className="about-three__img1" >
                                    <div className="inner" >
                                        <img src="assets/img/about/s1.png" alt=""/>
                                    </div>

                                    <div className="experience-box">
                                        <div className="counter-box">
                                            <h2 className="count"><CounterUp end={14} />
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
                                                <img src="assets/img/about/s2.png" alt=""/>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="about-three__img2-single">
                                                <img src="assets/img/about/s3.png" alt=""/>
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
                                        <h4>Do you have any project on your mind? Call Us: <a href="tel:123456789">+91 81979 82888</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End About One Content */}
                    </div>
                </div>
            </section>

                 {/*Start Why Choose Us One */}
                
                {/*End Why Choose Us One */}

                {/*Start Testimonials Two */}
                <section className="testimonials-two">
                    <div className="testimonials-two__pattern"
                        style={{backgroundImage: 'url(assets/img/pattern/testimonials-v2-pattern.png)'}}></div>
                    <div className="shape1 float-bob-x"><img src="assets/img/shape/testimonials-v2-shape1.png" alt=""/></div>
                    <div className="container">
                        <div className="sec-title text-center">
                            <div className="sub-title">
                                <h5>OUR CLIENT TESTIMONIALS</h5>
                            </div>
                            <h2>What They Say</h2>
                        </div>
                        

                        <TestimonialSlider4/>
                        {/*If we need navigation buttons */}
                        
                    </div>
                </section>
                {/*End Testimonials Two */}

                

                {/*Start Brand Two */}
                {/* <div className="brand-one brand-one--two about">
                    <div className="container">
                        <BrandSlider2/>
                    </div>
                </div> */}
                {/*End Brand Two */}

               


                {/*Start Call To Action One */}
                {/* <section className="call-to-action-one">
                    <div className="call-to-action-one__bg"
                        style={{backgroundImage: 'url(assets/img/background/call-to-action-v1-bg.jpg)'}}></div>
                    <div className="container">
                        <div className="call-to-action-one__inner">
                            <div className="call-to-action-one__content text-center">
                                <h2>Have a Project in Your Mind</h2>
                                <h3>Don’t Hesitate to Say Hello </h3>
                                <div className="btn-box">
                                    <a className="thm-btn" href="#">
                                        <span className="txt">LET’S TALK WITH US</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/*End Call To Action One */}


                {/*Start Team Two */}
                <section className="team-two" style={{backgroundColor:'black'}}>
    <div className="container">
        <div className="sec-title text-center">
            <div className="sub-title">
                <h5>OUR TEAM MEMBER</h5>
            </div>
            <h2 style={{color:'white'}}>Our Talented Team <br/>
                Member Behind Namko</h2>
        </div>
        {/* Add justify-content-center to center the columns */}
        <div className="row justify-content-center">
            {/*Start Team Two Single */}
            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                <div className="team-two__single">
                    <div className="team-two__single-img">
                        <div className="inner">
                            <img src="assets/img/team/team-v2-img1.jpg" alt="Mr. G. Mohammed"/>
                        </div>
                        <div className="content-box">
                            <h3><a href="/team-details">Mr. G. Mohammed</a></h3>
                            {/* <p>Developer</p> */}
                        </div>
                        <ul className="social-links clearfix">
                            <li className="share"><a href="#"><span className="icon-share"></span></a>
                                <ul className="social-links-inner">
                                    <li><a href="#"><i className="icon-linkedin-big-logo"></i></a></li>
                                    <li><a href="#"><i className="icon-instagram"></i></a></li>
                                    <li><a href="#"><i className="icon-facebook"></i></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/*End Team Two Single */}

            {/*Start Team Two Single */}
            <div className="col-xl-4 col-lg-4 wow fadeInDown" data-wow-delay=".3s">
                <div className="team-two__single">
                    <div className="team-two__single-img">
                        <div className="inner">
                            <img src="assets/img/team/team-v2-img2.jpg" alt="Mr. G. Akthar Hussain"/>
                        </div>
                        <div className="content-box">
                            <h3><a href="team-details">Mr. G. Akthar Hussain</a></h3>
                            {/* <p>Designer</p> */}
                        </div>
                        <ul className="social-links clearfix">
                            <li className="share"><a href="#"><span className="icon-share"></span></a>
                                <ul className="social-links-inner">
                                    <li><a href="#"><i className="icon-linkedin-big-logo"></i></a></li>
                                    <li><a href="#"><i className="icon-instagram"></i></a></li>
                                    <li><a href="#"><i className="icon-facebook"></i></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/*End Team Two Single */}
        </div>
    </div>
</section>
                {/*End Team Two */}
                </div>


                
            </Layout>
        </>
    )
}


