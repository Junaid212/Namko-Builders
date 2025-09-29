import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Waves, Dumbbell, Users, Car, Shield, Zap, Phone, Tv, Baby, Flame, Building } from "lucide-react";
import AmenitiesSection from "@/components/sections/home2/AmenitiesSection";
const amenities = [
  { icon: Waves, title: "Swimming Pool" },
  { icon: Dumbbell, title: "Club House & Gym" },
  { icon: Car, title: "Covered Parking" },
  { icon: Shield, title: "24/7 Security" },
  { icon: Zap, title: "Power Backup" },
  { icon: Phone, title: "Intercom System" },
  { icon: Tv, title: "Cable TV Ready" },
  { icon: Baby, title: "Children's Play Area" },
  { icon: Users, title: "Multipurpose Hall" },
  { icon: Building, title: "Visitors Lounge" },
//   { icon: Flame, title: "Gas Connection" },
//   { icon: Shield, title: "Fire Safety" }
];
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Project Details">
                
            {/*Start Project Details */}
            <section className="project-details">
                <div className="container">
                    <div className="project-details__inner">
                        <div className="project-details-img">
                            <div className="inner">
                                <img src="assets/img/blog/prjct-poster.png" alt=""/>
                            </div>
                        </div>
                        

                                       {/* <ul>
                                <li>
                                    <div className="text-box">
                                        <p>published:</p>
                                        <h4>April 20, 2023</h4>
                                    </div>
                                </li>

                                <li>
                                    <div className="text-box">
                                        <p>CATAGORY:</p>
                                        <h4>Design/ Ideas</h4>
                                    </div>
                                </li>

                                <li>
                                    <div className="text-box">
                                        <p>client:</p>
                                        <h4>NSSTHEME</h4>
                                    </div>
                                </li>

                                <li>
                                    <ul className="social-links">
                                        <li>
                                            <Link href="#"><span className="icon-facebook"></span></Link>
                                            <Link className="tw" href="#"><span className="icon-twitter"></span></Link>
                                            <Link className="ins" href="#"><span className="icon-instagram"></span></Link>
                                            <Link className="in" href="#"><span className="icon-linkedin-big-logo"></span></Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul> */}
                            
                        

                        <div className="project-details__text2">
                            <h2>Ocean View</h2>
                            <h4>Commercial & Residential</h4>
                            <p>OCEAN VIEW is special in its orientation and design. Nellikai Road next to a plethora
                                of Business Addresses captures your imagination to a destination where sun sets in 
                                the horizon with all its splendor. Be it Taj Manjuran or Milagres church the silhouettes
                                of Mangalore dramatizes itself in various dimensions into this great pavilion. OCEAN VIEW 
                                will dramatically alter the woy the fine shopping used to bel With its sprawling high degree
                                of precision oriented and maximum ambience shopping will usher in all the major brands 
                                hitherto exclusively held sway in the peripheries of big cities</p>

                            <div className="project-details__text2-bottom">
                                {/* <div className="tag-box">
                                    <Link href="#">DRAWING/DINING</Link>
                                        <Link href="#">BEDROOMS</Link>
                                        <Link href="#">KITCHEN AND WORK AREA</Link>
                                        <Link href="#">BATHROOMS</Link>
                                        <Link href="#">DOORS</Link>
                                        <Link href="#">WINDOWS</Link>
                                        
                                </div> */}

                                {/* <div className="icon-box">
                                    <Link href="#"><span className="icon-share"></span></Link>
                                </div> */}
                            </div>
                        </div>

                        {/* <div className="project-details__previous-next">
                            <div className="single-box">
                                <div className="icon-box">
                                    <Link href="#"><span className="icon-left-arrow1"></span></Link>
                                </div>
                                <div className="text-box">
                                    <p>Previous</p>
                                    <h4><Link href="#">Responsive Design</Link></h4>
                                </div>
                             </div>

                            <div className="single-box next">
                                <div className="text-box text-right">
                                    <p>Next</p>
                                    <h4><Link href="#">Analytics of Security</Link></h4>
                                </div>
                                <div className="icon-box">
                                    <Link href="#"><span className="icon-left-arrow"></span></Link>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
            {/*End Project Details */}
            <AmenitiesSection/>

            {/*Start Project Three */}
            <section className="project-three project-three--project style4">
                <div className="container">
                    <div className="sec-title text-center">
                        <h2>Our Projects</h2>
                    </div>
                    <div className="row">
                        {/*Start Project Three Single */}
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="project-three__single">
                                <div className="project-three__single-inner">
                                    <div className="project-three__single-img"
                                        style={{backgroundImage: 'url(assets/img/gallery/28.webp)'}}>
                                    </div>
                                    <div className="bg-overlay"></div>

                                    {/* <div className="project-three__overlay-icon">
                                        <ul>
                                            <li><Link className="img-popup" href="assets/img/project/project-v3-img4.jpg"><span
                                                        className="icon-search-interface-symbol"></span></Link>
                                            </li>
                                            <li><Link href="#"><span className="icon-link"></span></Link></li>
                                        </ul>
                                    </div> */}

                                    <div className="project-three__single-content">
                                        <p>Mangalore</p>
                                        <h2><Link href="#">Ocean View</Link></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Project Three Single */}

                        {/*Start Project Three Single */}
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="project-three__single">
                                <div className="project-three__single-inner">
                                    <div className="project-three__single-img"
                                        style={{backgroundImage: 'url(assets/img/gallery/50.webp)'}}>
                                    </div>
                                    <div className="bg-overlay"></div>

                                    {/* <div className="project-three__overlay-icon">
                                        <ul>
                                            <li><Link className="img-popup" href="assets/img/project/project-v3-img5.jpg"><span
                                                        className="icon-search-interface-symbol"></span></Link>
                                            </li>
                                            <li><Link href="#"><span className="icon-link"></span></Link></li>
                                        </ul>
                                    </div> */}

                                    <div className="project-three__single-content">
                                        <p>Mangalore</p>
                                        <h2><Link href="/gallery">Ocean View</Link></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Project Three Single */}

                        {/*Start Project Three Single */}
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="project-three__single">
                                <div className="project-three__single-inner">
                                    <div className="project-three__single-img"
                                        style={{backgroundImage: 'url(assets/img/gallery/3.webp)'}}>
                                    </div>
                                    <div className="bg-overlay"></div>

                                    {/* <div className="project-three__overlay-icon">
                                        <ul>
                                            <li><Link className="img-popup" href="assets/img/project/project-v3-img6.jpg"><span
                                                        className="icon-search-interface-symbol"></span></Link>
                                            </li>
                                            <li><Link href="#"><span className="icon-link"></span></Link></li>
                                        </ul>
                                    </div> */}

                                    <div className="project-three__single-content">
                                        <p>Mangalore</p>
                                        <h2><Link href="#">Ocean View</Link></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Project Three Single */}
                    </div>
                </div>
                <style>{`
                .project-details__text1 {
  position: relative;
  overflow: hidden;
}

.project-details__text1 .background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* ensures full coverage */
  z-index: 0;
}

.project-details__text1 .amenities-grid {
  position: relative;
  z-index: 1; /* keeps amenities above video */
}

                /* Amenities grid */
        .amenities-grid {
          display: grid;
          gap: 1.5rem;
          margin-bottom: 0.5rem;
        }

        @media (max-width: 480px) { 
          .amenities-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 768px) {
          .amenities-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .amenities-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 1280px) {
          .amenities-grid {
            grid-template-columns: repeat(5, 1fr);
          }
        }

        /* Amenity card - Updated for single row layout */
        .amenity-card {
        //   background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(245, 245, 245, 0.81);
          transition: all 0.3s ease;
        }

        .amenity-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(250, 204, 21, 0.3);
          border-color: #ffffffff;
        }

        .amenity-card-content {
          padding: 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .amenity-icon-container {
          flex-shrink: 0;
          width: 2.5rem;
          height: 2.5rem;
          color: rgba(250, 204, 21, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .amenity-card:hover .amenity-icon-container {
          transform: scale(1.1);
        }

        .amenity-icon {
          width: 1.75rem;
          height: 1.75rem;
          color: rgba(250, 204, 21, 1);
        }

        .amenity-name {
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
          margin: 0;
          line-height: 1.2;
        }

        /* Adjust grid for better single row layout */
        @media (max-width: 480px) {
          .amenity-card-content {
            padding: 0.75rem;
            gap: 0.5rem;
          }
          
          .amenity-icon-container {
            width: 2rem;
            height: 2rem;
          }
          
          .amenity-icon {
            width: 1.5rem;
            height: 1.5rem;
          }
          
          .amenity-name {
            font-size: 0.9rem;
          }
        }`}</style>
            </section>
            {/*End Project Three */}
            </Layout>
        </>
    )
}