import Link from "next/link"


export default function Action() {
    return (
        <> 

        {/*Start Call To Action One */}
        <section className="call-to-action-one">
            <div className="call-to-action-one__bg"
                style={{backgroundImage: 'url(assets/img/background/banner-hmdown.png)'}}></div>
            <div className="container">
                <div className="call-to-action-one__inner text-center" style={{marginTop:'-80px', marginBottom:"-110px"}}>
                    <div className="call-to-action-one__content ">
                        <h2>Make Your Dream Home a Reality</h2>
                        <h3>Don’t Hesitate to Say Hello </h3>
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
