'use client'
import { useState } from "react";
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { 
  Building2, 
  Zap, 
  Power, 
  Phone, 
  Tv, 
  Baby, 
  Users, 
  Waves, 
  Dumbbell, 
  Shield 
} from 'lucide-react';

const highlights = [
  { id: '1', text: 'Multipurpose hall', icon: Building2 },
  { id: '2', text: '2 automatic elevators', icon: Zap },
  { id: '3', text: 'Generator for lighting', icon: Power },
  { id: '4', text: 'Centrex intercom facility', icon: Phone },
  { id: '5', text: 'Cable TV provision', icon: Tv },
  { id: '6', text: 'Children\'s play area', icon: Baby },
  { id: '7', text: 'Visitors lounge', icon: Users },
  { id: '8', text: 'Swimming & toddler pool', icon: Waves },
  { id: '9', text: 'Clubhouse & gym', icon: Dumbbell },
  { id: '10', text: 'CCTV in lounge', icon: Shield },
];

const styles = {
  container: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    border: '1px solid #efefefff',
    overflow: 'hidden',
  },
  header: {
    background: '#ffffffff',
    padding: '16px 24px'
  },
  headerTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#E2A33A',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    margin: 0
  },
  headerSubtitle: {
    color: '#dbeafe',
    fontSize: '14px',
    marginTop: '4px',
    margin: 0
  },
  content: {
    padding: '24px'
  },
  grid: {
    display: 'grid',
    gap: '12px'
  },
  highlightItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ead284ff',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  },
  highlightItemHover: {
    borderColor: '#f0e68bff',
    backgroundColor: 'rgba(239, 246, 255, 0.5)'
  },
  iconContainer: {
    flexShrink: 0
  },
  iconWrapper: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#f7edbbff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s ease'
  },
  iconWrapperHover: {
    backgroundColor: '#f7edbbff'
  },
  textContainer: {
    flex: 1
  },
  text: {
    color: '#1f2937',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '1.5',
    margin: 0,
    transition: 'color 0.3s ease'
  },
  textHover: {
    color: '#E2A33A'
  },
  checkmarkContainer: {
    flexShrink: 0
  },
  checkmark: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: '#E2A33A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8,
    transition: 'opacity 0.3s ease'
  },
  checkmarkHover: {
    opacity: 1
  },
  footer: {
    marginTop: '24px',
    paddingTop: '16px',
    borderTop: '1px solid #f3f4f6'
  },
  footerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '14px',
    color: '#6b7280'
  },
  footerLabel: {
    fontWeight: '500'
  },
  badge: {
    backgroundColor: '#dbeafe',
    color: '#1d4ed8',
    padding: '4px 12px',
    borderRadius: '9999px',
    fontWeight: '600'
  }
};
export default function Home() {
  const [hoveredItem, setHoveredItem] = useState(null);

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Project Details">

            {/*Start Blog Details */}
            <section className="blog-details">
                <div className="container">
                    <div className="row">
                        {/*Start Blog Sidebar Content */}
                        <div className="col-xl-8">
                            <div className="blog-details__content">
                                <div className="blog-details__content-img1">
                                    <img src="assets/img/blog/prjct-poster.png" alt=""/>
                                </div>

                                <div className="blog-details__content-text1">
                                    <h2>OCEAN VIEW</h2>
                                    <p className="text1">Commercial & Residential</p>
                                    <p className="text2">OCEAN VIEW is special in its orientation and design. Nellikai Road next to a plethora of Business Addresses captures your imagination to a destination where sun sets in the horizon with all its splendor. Be it Taj Manjuran or Milagres church the silhouettes of Mangalore dramatizes itself in various dimensions into this great pavilion. OCEAN VIEW will dramatically alter the woy the fine shopping used to bel With its sprawling high degree of precision oriented and maximum ambience shopping will usher in all the major brands hitherto exclusively held sway in the peripheries of big cities
</p>
                                </div><br/>
                                <div className="blog-details__content-img1">
                                    <img src="assets/img/blog/b2.png" alt=""/>
                                </div>

                                {/* <div className="blog-details__content-img2">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="blog-details__content-img2-single">
                                                <img src="assets/img/blog/blog-details-img2.jpg" alt=""/>
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="blog-details__content-img2-single">
                                                <img src="assets/img/blog/blog-details-img3.jpg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                                <div className="blog-details__content-text2">
                                    {/* <h2>Latest Articles Updated Daily</h2> */}
                                    {/* <p>Mangalore due to its special significance as a burgeoning tourist destination is poised to play a major role in attracting foreign direct investment and inflow of major players with new govemment at the Apex. Promoters of this project Mr. G. Mohammed & Mr. G. Akbar Hussain started their enterprise of importing food & beverages and run supermarkets at Doha Qatar. Middle Eastern progress inspired them with an imagination towards high end real estate. OCEAN VIEW with a combination of high end apartments and world class business spaces offer a dimension hitherto not designed elsewhere. Excellence everywhere has a common parlance and OCEAN VIEW stands imposingly inspiring for everyone!</p> */}

                                </div>

                                {/* <div className="blog-details__content-text3 text-center">
                                    <div className="icon-box">
                                        <span className="icon-right-quotation-mark"></span>
                                    </div>

                                    <div className="text-box">
                                        <h4>Diam luctus nostra dapibus varius et semper semper rutrum ad risus felis
                                            eros. Cursus libero viverra tempus netus diam vestibulum</h4>
                                        <p>David Backhum</p>
                                    </div>
                                </div> */}

                                {/* <div className="blog-details__content-text4">
                                    <div className="tag-box">
                                        <div className="title">
                                            <h2>Posted in:</h2>
                                        </div>

                                        <div className="tag-box-list">
                                            <ul>
                                                <li><Link href="#">Development</Link></li>
                                                <li><Link href="#">Digital</Link></li>
                                                <li><Link href="#">Tech</Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="icon-box">
                                        <Link href="#"><span className="icon-share"></span></Link>
                                    </div>
                                </div> */}

                                {/* <div className="comment-one">
                                    <h3 className="comment-one__title">Comments (2)</h3>
                                    <div className="comment-one__single">
                                        <div className="comment-one__image">
                                            <img src="assets/img/blog/blog-details-img4.jpg" alt=""/>
                                        </div>
                                        <div className="comment-one__content">
                                            <h3>Saiful Islam</h3>
                                            <p>It is a long established fact that a reader will be distracted by the
                                                readable content of a page when looking at its layout. </p>
                                            <span>February 03. 2023 <Link href="#" className="comment-one__btn">Reply</Link></span>
                                        </div>
                                    </div>

                                    <div className="comment-one__single">
                                        <div className="comment-one__image">
                                            <img src="assets/img/blog/blog-details-img5.jpg" alt=""/>
                                        </div>
                                        <div className="comment-one__content">
                                            <h3>Jhon Smith</h3>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the
                                                majority have suffered alteration in some form.</p>
                                            <span>February 03. 2023 <Link href="#" className="comment-one__btn">Reply</Link></span>
                                        </div>
                                    </div>
                                </div> */}

                                {/* <div className="blog-details__content-form">
                                    <div className="title-box">
                                        <h2>Let’s Get in Touch</h2>
                                        <p>Your email address will not be published. Required fields are marked *</p>
                                    </div>

                                    <form action="assets/inc/sendemail.php"
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
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                <div className="contact-page__input-box">
                                                    <input type="text" placeholder="Website*" name="website"/>
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
                                                            Send Meassage
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div> */}
                            </div>
                        </div>
                        {/*End Blog Sidebar Content */}

                        {/*Start Sidebar */}
                        <div className="col-xl-4" >
                            <div className="sidebar" >
                                {/*Start Sidebar Single */}
                                <div style={styles.container} >
      <div style={styles.header}>
        <h3 style={styles.headerTitle}>
          {/* <Building2 size={24} /> */}
           Highlights
        </h3>
        {/* <p style={styles.headerSubtitle}>Premium amenities & features</p> */}
      </div>
      
      <div style={styles.content}>
        <div style={styles.grid}>
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            const isHovered = hoveredItem === highlight.id;
            
            return (
              <div
                key={highlight.id}
                style={{
                  ...styles.highlightItem,
                  ...(isHovered ? styles.highlightItemHover : {}),
                  animationDelay: `${index * 100}ms`
                }}
                onMouseEnter={() => setHoveredItem(highlight.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div style={styles.iconContainer}>
                  <div style={{
                    ...styles.iconWrapper,
                    ...(isHovered ? styles.iconWrapperHover : {})
                  }}>
                    <Icon 
                      size={20} 
                      color={isHovered ? '#E2A33A' : '#E2A33A'}
                      style={{ transition: 'color 0.3s ease' }}
                    />
                  </div>
                </div>
                <div style={styles.textContainer}>
                  <p style={{
                    ...styles.text,
                    ...(isHovered ? styles.textHover : {})
                  }}>
                    {highlight.text}
                  </p>
                </div>
                {/* <div style={styles.checkmarkContainer}>
                  <div style={{
                    ...styles.checkmark,
                    ...(isHovered ? styles.checkmarkHover : {})
                  }}>
                    <svg width="12" height="12" fill="white" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div> */}
              </div>
            );
          })}
        </div>
        
        {/* <div style={styles.footer}>
          <div style={styles.footerContent}>
            <span style={styles.footerLabel}>Total Amenities</span>
            <span style={styles.badge}>
              {highlights.length}
            </span>
          </div>
        </div> */}
      </div>
    </div>
                                {/*End Sidebar Single */}

                                <div className="blog-details__content-img1" style={{marginTop:"20px"}}>
                                    <img src="assets/img/project/4.png" alt=""/>
                                </div>

                                {/*Start Sidebar Single */}
                                {/* <div className="sidebar__single sidebar__category">
                                    <h3 className="sidebar__title">Specifications</h3>

                                    <ul className="sidebar__category-list">
                                        <li><Link  href="#">DRAWING/DINING <span
                                                    className="icon-left-arrow"></span></Link></li>
                                        <li><Link href="#">BEDROOMS <span className="icon-left-arrow"></span></Link></li>
                                        <li><Link href="#">KITCHEN AND WORK AREA <span className="icon-left-arrow"></span></Link></li>
                                        <li><Link href="#">BATHROOMS <span className="icon-left-arrow"></span></Link></li>
                                        <li><Link href="#">DOORS & WINDOWS <span className="icon-left-arrow"></span></Link></li>
                                    </ul>
                                </div> */}
                                {/*End Sidebar Single */}

                                {/*Start Sidebar Single */}
                                {/* <div className="sidebar__single sidebar__recent-post">
                                    <h3 className="sidebar__title">Recent Post</h3>

                                    <ul className="sidebar__recent-post-box">
                                        <li>
                                            <div className="inner">
                                                <div className="img-box">
                                                    <img src="assets/img/blog/sidebar-img1.jpg" alt=""/>
                                                </div>

                                                <div className="content-box">
                                                    <h4><Link href="#">Keep Your Business <br/> Safe
                                                            Ensure High</Link></h4>
                                                    <p><span className="icon-clock"></span> April 21, 2023</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="inner">
                                                <div className="img-box">
                                                    <img src="assets/img/blog/sidebar-img2.jpg" alt=""/>
                                                </div>

                                                <div className="content-box">
                                                    <h4><Link href="#">We’ve Been a Strategy <br/>
                                                            Thought Leader for</Link></h4>
                                                    <p><span className="icon-clock"></span> April 21, 2023</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="inner">
                                                <div className="img-box">
                                                    <img src="assets/img/blog/sidebar-img3.jpg" alt=""/>
                                                </div>

                                                <div className="content-box">
                                                    <h4><Link href="#">This Week’s Top <br/> Stories
                                                            About It</Link></h4>
                                                    <p><span className="icon-clock"></span> April 21, 2023</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div> */}
                                {/*End Sidebar Single */}

                                {/*Start Sidebar Single */}
                                <div className="sidebar__single sidebar__tags">
                                    <h3 className="sidebar__title">Specifications</h3>
                                    <ul className="sidebar__tags-list clearfix">
                                        <li><Link href="#">DRAWING/DINING</Link></li>
                                        <li><Link href="#">BEDROOMS</Link></li>
                                        <li><Link href="#">KITCHEN </Link></li>
                                        <li><Link href="#">BATHROOMS</Link></li>
                                        <li><Link href="#">DOORS</Link></li>
                                        <li><Link href="#">WINDOWS</Link></li>
                                        <li><Link href="#">WORK AREA</Link></li>
                                    </ul>
                                </div>
                                {/*End Sidebar Single */}

                                

                                <div className="blog-details__content-img1">
                                    <img src="assets/img/project/5.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        {/*End Sidebar */}
                    </div>
                </div>
            </section>
            {/*End Blog Details */}

            </Layout>
        </>
    )
}
