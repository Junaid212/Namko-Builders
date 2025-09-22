'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import React from 'react';

export default function RunningText() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            {/*Start Video One */}
            <section className="video-one video-one--two">
                <div className="scrolling-text-one">
                    <div className="scrolling-text-one__wrap" style={{paddingBottom: '80px'}}>
                        <div className="scrolling-text-one__title">
                            <h2>NAMKO DESIGNED FOR LIFE.</h2>
                        </div>
                        <div className="scrolling-text-one__title">
                            <h2>NAMKO DESIGNED FOR LIFE.</h2>
                        </div>
                        <div className="scrolling-text-one__title">
                            <h2>NAMKO DESIGNED FOR LIFE.</h2>
                        </div>
                    </div>
                </div>
                <div className="video-one__pattern"><img src="assets/img/pattern/pan.png" alt=""/></div>
                
                {/* Mobile Responsive Styles */}
                <style jsx>{`
                    /* Mobile Responsive Styles */
                    @media (max-width: 768px) {
                        .scrolling-text-one__wrap {
                            padding-bottom: 40px !important;
                        }
                        
                        .scrolling-text-one__title h2 {
                            font-size: 1.5rem !important;
                            white-space: nowrap;
                        }
                        
                        .video-one__pattern img {
                            max-width: 80%;
                            height: auto;
                        }
                    }
                    
                    /* Small Mobile Devices */
                    @media (max-width: 480px) {
                        .scrolling-text-one__title h2 {
                            font-size: 5.2rem !important;
                            letter-spacing: 1px;
                            

                        }
                        
                        .scrolling-text-one__wrap {
                            padding-bottom: 80px !important;
                        }
                            .video-one__pattern img {
                            max-width: 200%;
                            height: 272px;
                        }
                    }
                `}</style>
            </section>
            {/*End Video One */}
        </>
    )
}