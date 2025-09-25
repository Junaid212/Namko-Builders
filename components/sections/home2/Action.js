import Link from "next/link"


export default function Action() {
    return (
        <> 

        {/*Start Call To Action One */}
       <section className="call-to-action-one">
    {/* Background Video */}
    <div className="call-to-action-one__bg">
        <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            style={{width:'100%'}}
        >
            <source src="assets/v-banner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>

    {/* Content */}
    <div className="container">
        <div className="call-to-action-one__inner text-center" >
            <div className="call-to-action-one__content">
                <h2>Make Your Dream Home a Reality</h2>
                <h3>Don’t Hesitate to Say Hello</h3>
                <div className="btn-box">
                    <a className="thm-btn" href="#">
                        <span className="txt">Enquire Now</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

        {/*End Call To Action One */}
            
        </>
    )
}
