'use client'
import Link from "next/link"
import { useState } from "react"


export default function Services() {
    
    return (
        <>
            
            {/*Start Service Two */}
        <section className="service-two">
            <div className="shape1 float-bob-y"><img src="assets/img/shape/service-v2-shape1.png" alt=""/></div>
            <div className="container">
                <div className="sec-title text-center">
                    <div className="sub-title">
                        <h5>OUR SERVICE</h5>
                    </div>
                    <h2>Our Services</h2>
                </div>
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
                                <p>Modern homes designed for comfort, style, and everyday living</p>
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
                    {/*End Service Two Single */}
                </div>
            </div>
        </section>
        {/*End Service Two */}


        </>
    )
}
