'use client'
import Link from "next/link"
import TestimonialSlider4 from '@/components/slider/TestimonialSlider4'
import BrandSlider2 from '@/components/slider/BrandSlider2'
import Layout from "@/components/layout/Layout"
import CounterUp from "@/components/elements/CounterUp"
import FeautureTwo from "@/components/sections/home1/FeautureTwo"

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
                                        <img src="assets/img/resource/feauture-v3-img1.jpg" alt=""/>
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
                                        <p> We are committed to creating homes that combine quality, comfort, and style. 
                                            Every project is thoughtfully designed to meet modern lifestyle needs.</p>
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
<FeautureTwo/>

                 {/*Start Why Choose Us One */}
                <div className="why-choose-us-one">
                    <div className="container">
                        <div className="row">
                            {/*Start Why Choose Us One Img */}
                            <div className="col-xl-6 wow animated fadeInRight" data-wow-delay="0.1s">
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
                            </div>
                            {/*End Why Choose Us One Img */}

                            {/*Start Why Choose Us Content */}
                            <div className="col-xl-6 wow animated fadeInLeft" data-wow-delay="0.1s">
                                <div className="why-choose-us-one__content">
                                    <ul>
                                        <li>
                                            <div className="inner">
                                                <div className="icon-box">
                                                    <span className="icon-office-building"></span>
                                                </div>
                                                <div className="content-box">
                                                    <h2>Commitment to Quality</h2>
                                                    <p>Delivering homes built with precision, care, and lasting value. </p>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="inner">
                                                <div className="icon-box">
                                                    <span className="icon-bed"></span>
                                                </div>
                                                <div className="content-box">
                                                    <h2>Customer-Centric Approach</h2>
                                                    <p>Every decision is made keeping your comfort and lifestyle in mind. </p>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="inner">
                                                <div className="icon-box">
                                                    <span className="icon-targeted"></span>
                                                </div>
                                                <div className="content-box">
                                                    <h2>Innovation in Design</h2>
                                                    <p>Modern layouts and thoughtful details for contemporary living.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/*End Why Choose Us Content */}
                        </div>
                    </div>
                </div>
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
                <section className="team-two">
                    <div className="container">
                        <div className="sec-title text-center">
                            <div className="sub-title">
                                <h5>OUR TEAM MEMBER</h5>
                            </div>
                            <h2>Our Talented Team <br/>
                                Member Behind Namko</h2>
                        </div>
                        <div className="row">
                            {/*Start Team Two Single */}
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                                <div className="team-two__single">
                                    <div className="team-two__single-img">
                                        <div className="inner">
                                            <img src="assets/img/team/team-v2-img1.jpg" alt=""/>
                                        </div>

                                        <div className="content-box">
                                            <h3><Link href="/team-details">Mr. G. Mohammed </Link></h3>
                                            {/* <p>Developer</p> */}
                                        </div>
                                        <ul className="social-links clearfix">
                                            <li className="share"><Link href="#"><span className="icon-share"></span></Link>
                                                <ul className="social-links-inner">
                                                    <li><Link href="#"><i className="icon-linkedin-big-logo"></i></Link></li>
                                                    <li><Link href="#"><i className="icon-instagram"></i></Link>
                                                    </li>
                                                    <li><Link href="#"><i className="icon-facebook"></i></Link></li>
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
                                            <img src="assets/img/team/team-v2-img2.jpg" alt=""/>
                                        </div>

                                        <div className="content-box">
                                            <h3><Link href="team-details">Mr. G. Akthar Hussain </Link></h3>
                                            {/* <p>Designer</p> */}
                                        </div>
                                        <ul className="social-links clearfix">
                                            <li className="share"><Link href="#"><span className="icon-share"></span></Link>
                                                <ul className="social-links-inner">
                                                    <li><Link href="#"><i className="icon-linkedin-big-logo"></i></Link></li>
                                                    <li><Link href="#"><i className="icon-instagram"></i></Link>
                                                    </li>
                                                    <li><Link href="#"><i className="icon-facebook"></i></Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*End Team Two Single */}

                            {/*Start Team Two Single */}
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                                <div className="team-two__single">
                                    <div className="team-two__single-img">
                                        <div className="inner">
                                            <img src="assets/img/team/team-v2-img3.jpg" alt=""/>
                                        </div>

                                        <div className="content-box">
                                            <h3><Link href="/team-details">James Bond</Link></h3>
                                            {/* <p>Creator</p> */}
                                        </div>
                                        <ul className="social-links clearfix">
                                            <li className="share"><Link href="#"><span className="icon-share"></span></Link>
                                                <ul className="social-links-inner">
                                                    <li><Link href="#"><i className="icon-linkedin-big-logo"></i></Link></li>
                                                    <li><Link href="#"><i className="icon-instagram"></i></Link>
                                                    </li>
                                                    <li><Link href="#"><i className="icon-facebook"></i></Link></li>
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


