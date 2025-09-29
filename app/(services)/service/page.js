'use client'
import Layout from "@/components/layout/Layout"
import BrandSlider2 from '@/components/slider/BrandSlider2'
import Link from "next/link"
import { useState } from 'react'
import CounterUp from "@/components/elements/CounterUp"
import Action from "@/components/sections/home2/Action"
import RunningText from "@/components/sections/home3/RunningText"
import { Waves } from "lucide-react"
export default function Home() {
   

    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Service Page">
                <div>
                     {/*Start About Three */}
            
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

                <div className="why-choose-us-one">
                                    <div className="container">
                                        <div className="row">
                                            {/*Start Why Choose Us One Img */}
                                            <div className="col-xl-6 wow animated fadeInRight" data-wow-delay="0.1s">
                                                <div className="why-choose-us-one__img">
                                                    <div className="shape1"><img src="assets/img/shape/nmko.png" alt=""/></div>
                                                    <ul>
                                                        <li>
                                                            <div className="img-box">
                                                                <img src="assets/img/shape/1.png" alt=""/>
                                                            </div>
                                                        </li>
                
                                                        <li>
                                                            <div className="img-box">
                                                                <img src="assets/img/shape/2.png" alt=""/>
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
                                                                    <h2 >Commitment to Quality</h2>
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
                                                <style>{`
                                                .content-box h2{
                                                color: white;
                                                }
                                                `}</style>
                                            </div>
                                            {/*End Why Choose Us Content */}
                                        </div>
                                    </div>
                                </div>
                                <RunningText/>
                                <div className="center-wrapper">
                                <div className="featured-amenity">
          <div className="featured-amenity-content">
            <div className="featured-amenity-icon-container">
              <div className="featured-amenity-icon-wrapper">
                <Waves className="featured-amenity-icon" />
              </div>
            </div>
            <h3 className="featured-amenity-title">
              Resort-Style Swimming Pool
            </h3>
            <p className="featured-amenity-description">
              Dive into luxury with our king-size swimming pool featuring a dedicated toddler pool, 
              perfect for the whole family to enjoy year-round.
            </p>
            <div className="featured-amenity-tags">
              <div className="featured-amenity-tag">King Size Pool</div>
              <div className="featured-amenity-tag">Toddler Pool</div>
              <div className="featured-amenity-tag">Terrace Location</div>
              <div className="featured-amenity-tag">Professional Maintenance</div>
            </div>
          </div>
          <style>{`
          /* Featured amenity section */
        .featured-amenity {
          width: 80%;
          background: #F1B231;
          border-radius: 0.5rem;
          padding: 2rem;
          color: #000;
          text-align: center;
          backdrop-filter: blur(10px);
          margin: 0 auto; 
        }
          .center-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh; /* full screen height */
}


        @media (min-width: 768px) {
          .featured-amenity {
            padding: 3rem;
          }
        }

        .featured-amenity-content {
          max-width: 64rem;
          margin: 0 auto;
        }

        .featured-amenity-icon-container {
          display: flex;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .featured-amenity-icon-wrapper {
          width: 5rem;
          height: 5rem;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .featured-amenity-icon {
          width: 2.5rem;
          height: 2.5rem;
          color: #000;
        }

        .featured-amenity-title {
          font-size: 1.875rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        @media (min-width: 768px) {
          .featured-amenity-title {
            font-size: 2.25rem;
          }
        }

        .featured-amenity-description {
          font-size: 1.25rem;
          color: rgba(0, 0, 0, 0.8);
          margin-bottom: 2rem;
          max-width: 42rem;
          margin-left: auto;
          margin-right: auto;
        }

        .featured-amenity-tags {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .featured-amenity-tag {
          background: rgba(0, 0, 0, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          color: white;
        }
          `}</style>
        </div>
        </div>

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
                                            <h2><Link href="/architecture">Quality Craftsmanship</Link></h2>
                                            <p>Every project is built with attention to detail and lasting strength.</p>
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
                                            <h2><Link href="/architecture">Innovative Designs</Link></h2>
                                            <p>Spaces created with modern ideas that balance beauty and function.</p>
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
                                            <h2><Link href="/architecture">Sustainable Practices</Link></h2>
                                            <p>We use eco-friendly methods and materials for a better tomorrow.</p>
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
                                            <h2><Link href="/architecture">Customer Trust</Link></h2>
                                            <p>Honesty, transparency, and commitment guide everything we do.</p>
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
                {/* <section className="call-to-action-one">
                    <div className="call-to-action-one__bg"
                        style={{backgroundImage: 'url(assets/img/background/banner-hmdown.png)'}}></div>
                    <div className="container">
                        <div className="call-to-action-one__inner">
                            <div className="call-to-action-one__content text-center" style={{marginTop:'-80px', marginBottom:"-110px"}}>
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
                </section> */}
                <Action/>
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