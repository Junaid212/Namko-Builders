import Link from "next/link"

export default function Footer1() {
    return (
        <>
            {/*Start Footer One */}
            <footer className="footer-one">
                <div className="shape1"><img className="float-bob-y" src="assets/img/shape/footer-v1-shape1.png" alt="" /></div>
                {/*Start Footer Main */}
                <div className="footer-main">
                    <div className="container">
                        <div className="row">
                            {/*Start Single Footer Widget */}
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".1s">
                                <div className="single-footer-widget footer-widget__about">
                                    <div className="logo-box">
                                        <Link href="/"><img src="assets/img/resource/logo-tr.png" alt="" /></Link>
                                    </div>

                                    <div className="footer-widget__about-inner">
                                        <div className="text-box">
                                            <p>Nellikai Road, State Bank 
                                                Mangalore </p>
                                        </div>
                                        <div className="number-box">
                                            <Link href="tel:123456789">+91 81979 82888</Link>
                                        </div>
                                        <div className="text-box">
                                            <p>namkobuilders@gmail.com</p>
                                        </div>
                                        <div className="footer-social-link">
                                            {/* <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                            <Link href="#"><i className="fab fa-twitter"></i></Link> */}
                                            <Link href="https://www.instagram.com/namkobuilders1"><i className="fab fa-instagram"></i></Link>
                                            {/* <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                                            <Link href="#"><i className="fab fa-youtube"></i></Link> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End Single Footer Widget */}

                            {/*Start Single Footer Widget */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                <div className="single-footer-widget footer-widget__links">
                                    <div className="title">
                                        <h2>Quick Links</h2>
                                    </div>

                                    <div className="footer-widget__links-box">
                                        <ul>
                                            <li><Link href="/">Home</Link></li>
                                            <li><Link href="/about">About Us</Link></li>
                                            <li><Link href="/service">Services</Link></li>
                                            <li><Link href="/blog-details"> Projects</Link></li>
                                            <li><Link href="/contact">Contact Us</Link></li>
                                            
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            {/*End Single Footer Widget */}

                            {/*Start Single Footer Widget */}
                            <div className="col-xl-5 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                <div className="single-footer-widget footer-widget__newsletter">
                                    <div className="title">
                                        <h2>Newsletter</h2>
                                    </div>

                                    <div className="footer-widget__newsletter-box">
                                        <div className="footer-widget__newsletter-text">
                                            <p>Subscribe our newsletter to get the <br />
                                                latest news & updates</p>
                                        </div>

                                        <form className="footer-widget__newsletter-form">
                                            <div className="input-box">
                                                <input type="email" placeholder="email@example.com" name="email" />
                                                <button type="submit" className="footer-widget__newsletter-form-btn"><i
                                                    className="icon-telegram"></i>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/*End Single Footer Widget */}
                        </div>
                    </div>
                </div>
                {/*End Footer Main */}

                {/*Start Footer Bottom */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-bottom__inner">
                            <div className="footer-bottom__text text-center">
                                <p>Copyright © 2025 Namko by <Link href="https://brightmedia.tech " target="blank">BRIGHT MEDIA.</Link> All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Footer Bottom */}
            </footer>
            {/*End Footer One */}

        </>
    )
}