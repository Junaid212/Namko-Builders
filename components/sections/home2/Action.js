import Link from "next/link";

export default function Action() {
  return (
    <>
      {/*Start Call To Action One */}
      <section className="call-to-action-one">
        {/* Background Video */}
        <div className="call-to-action-one__bg">
          {/* Desktop Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="video-desktop"
          >
            <source src="/v-banner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Mobile Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="video-mobile"
          >
            <source src="/mv-banner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content */}
        <div className="container">
          <div className="call-to-action-one__inner">
            <div className="call-to-action-one__content">
              <h2>Make Your Dream<br/> Home a Reality</h2>
              <h3>Don't Hesitate to Say Hello</h3>
              <div className="btn-box">
                <a className="thm-btn" href="#">
                  <span className="txt">Enquire Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          .call-to-action-one__inner {
            text-align: left;
          }
          
          .call-to-action-one__content {
            text-align: left;
          }
          
          .btn-box {
            text-align: left;
          }

          .video-desktop {
            display: block;
            width: 100%;
          }

          .video-mobile {
            display: none;
            width: 100%;
          }

          @media (max-width: 768px) {
            .video-desktop {
              display: none;
            }
            .video-mobile {
              display: block;
              padding-bottom: -150px;
            }
          }
        `}</style>
      </section>
      {/*End Call To Action One */}
    </>
  );
}