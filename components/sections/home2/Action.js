import Link from "next/link"


export default function Action() {
    return (
        <> 

        {/*Start Call To Action One */}
        <section className="call-to-action-one">
            <div className="call-to-action-one__bg"
                style={{backgroundImage: 'url(assets/img/background/call-to-action-v1-bg.jpg)'}}></div>
            <div className="container">
                <div className="call-to-action-one__inner">
                    <div className="call-to-action-one__content text-center">
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
