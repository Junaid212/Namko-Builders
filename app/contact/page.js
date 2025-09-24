
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Contact Us">
                <div>
                {/*Start Contact Page */}
                <section className="contact-page">
                    <div className="contact-page__top">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="contact-page__top-content">
                                        <div className="contact-page__top-content-top">
                                            <h2>Reach Out Today</h2>
                                            <p>We’re here to answer your questions and help you find your perfect home. 
                                                Reach out to us, and our team will guide you every step of the way.</p>
                                        </div>

                                        <div className="contact-page__top-content-bottom">
                                            <h2>Contact Info</h2>
                                            <ul>
                                                <li>
                                                    <div className="inner">
                                                        <div className="icon-box">
                                                            <span className="icon-pin"></span>
                                                        </div>

                                                        <div className="content-box">
                                                            <h4>Address</h4>
                                                            <p>Nellikai Road, State Bank, Mangalore</p>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="inner">
                                                        <div className="icon-box">
                                                            <span className="icon-phone"></span>
                                                        </div>

                                                        <div className="content-box">
                                                            <h4>Phone</h4>
                                                            <p><a href="tel:+91 81979 82888">+91 81979 82888</a> 
                                                            {/* or <a href="tel:+91 81979 82888">+91 81979 82888</a> */}
                                                                    </p>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="inner">
                                                        <div className="icon-box">
                                                            <span className="icon-envelope"></span>
                                                        </div>

                                                        <div className="content-box">
                                                            <h4>Email</h4>
                                                            <p><a href="mailto:namkobuilders@gmail.com">namkobuilders@gmail.com</a>
                                                                {/* or <a href="mailto:yourmail@email.com">info@example.com</a> */}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6" style={{backgroundColor:'#E6A63B'}}>
                                    <div className="contact-page__google-map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!4v1757762154395!6m8!1m7!1so2cA1mHdsHWoFbljWYYL-Q!2m2!1d12.86264294407403!2d74.83592195284166!3f209.6556950915648!4f33.1684592197137!5f0.7820865974627469" width="600" height="580" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-page__bottom">
                        {/*Start Contact Two */}
                        <div className="contact-two">
                            <div className="container">
                                <div className="contact-two__inner">
                                    <div className="title-box">
                                        <h2>Let’s Get in Touch</h2>
                                        <p>Your email address will not be published. Required fields are marked *</p>
                                    </div>
                                    <div className="contact-two__inner-box">
                                        <form action="/"
                                            className="contact-page__form contact-form-validated">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div className="contact-page__input-box">
                                                        <input type="text" placeholder="Your Name*" name="name"/>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div className="contact-page__input-box">
                                                        <input type="email" placeholder="Your Email*" name="email"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div className="contact-page__input-box">
                                                        <input type="text" placeholder="Phone*" name="phone"/>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div className="contact-page__input-box">
                                                        <input type="text" placeholder="Subject*" name="subject"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                    <div className="contact-page__input-box">
                                                        <textarea name="message" placeholder="Write Message*"></textarea>
                                                    </div>
                                                    <div className="contact-page__btn">
                                                        <button className="thm-btn" type="submit"
                                                            data-loading-text="Please wait...">
                                                            <span className="txt">
                                                                SEND MEASSAGE
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Contact Two */}
                    </div>
                </section>
                {/*End Contact Page */}
                </div>

            </Layout>
        </>
    )
}