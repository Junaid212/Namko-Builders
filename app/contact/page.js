'use client';

import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import Layout from '@/components/layout/Layout';


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Contact Us">
    <div className="appContainer">
      {/* Three Steps Section */}
      <div className="stepsContainer">
        <div className="stepsGrid">
          {/* Step 01 */}
          <div className="stepCard">
            <div className="stepIconContainer">
              <MapPin size={32} />
            </div>
            <h3 className="stepTitle">Address</h3>
            <p className="stepDescription">
              Nellikai Road, State Bank, Mangalore
            </p>
          </div>

          {/* Step 02 */}
          <div className="stepCard">
            <div className="stepIconContainer">
              <Phone size={32} />
            </div>
            <h3 className="stepTitle">Phone</h3>
            <p className="stepDescription">
              +91 81979 82888
            </p>
          </div>

          {/* Step 03 */}
          <div className="stepCard">
            <div className="stepIconContainer">
              <Mail size={32} />
            </div>
            <h3 className="stepTitle">Email</h3>
            <p className="stepDescription">
              namkobuilders@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Get in Touch Section */}
      <div className="contactContainer">
        <div className="contactLayout">
          {/* Social Media Icons */}
          <div className="socialIcons">
            <div className="socialIcon facebook">
              <Facebook size={20} />
            </div>
            <div className="socialIcon twitter">
              <Twitter size={20} />
            </div>
            <div className="socialIcon instagram">
              <Instagram size={20} />
            </div>
          </div>

          {/* Contact Form */}
          <div className="contactForm">
            <div className="formHeader">
              <h2 className="formTitle">Get in touch</h2>
              {/* <p className="formDescription">
                We're here to answer your questions and help you find your perfect home. 
                 Reach out to us, and our team will guide you every step of the way.
              </p> */}
            </div>
            
            <div className="formFields">
              <div className="formField">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="formInput"
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="formField">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="formInput"
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="formField">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="formTextarea"
                  placeholder="Enter your message"
                />
              </div>
            </div>

            <button className="formButton">
              <span>Send Message</span>
            </button>
          </div>

          {/* Map Section */}
          <div className="mapSection">
            <div className="mapContainer">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1066.1228320504958!2d74.83473557978864!3d12.862494395969977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35b002b75375b%3A0xa045ada1736ae40b!2sNamko%20Ocean%20Seaview!5e1!3m2!1sen!2sin!4v1758794600098!5m2!1sen!2sin"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Namko Ocean Seaview"
              />
            </div>
          </div>
        </div>
      </div>
      <style>{`
      /* App Container */
.appContainer {
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, rgba(240, 190, 8, 0.1) 0%, rgba(59, 130, 246, 0.05) 50%, rgba(236, 72, 153, 0.1) 100%);
  backdrop-filter: blur(10px);
  position: relative;
}

.appContainer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 20%, rgba(240, 190, 8, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 60%, rgba(236, 72, 153, 0.1) 0%, transparent 50%);
  pointer-events: none;
  z-index: -1;
}

/* Steps Section */
.stepsContainer {
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 1.5rem 4rem;
  position: relative;
  z-index: 1;
}

.stepsGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .stepsGrid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.stepCard {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(240, 190, 8, 0.3);
  border-radius: 0.5rem;
  padding: 1.5rem 1.25rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.stepCard::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #f0be08, #3b82f6, #ec4899);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.stepCard:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  border-color: rgba(240, 190, 8, 0.6);
  background: rgba(255, 255, 255, 0.25);
}

.stepCard:hover::before {
  opacity: 1;
}

.stepCard:nth-child(1):hover {
  background: rgba(240, 190, 8, 0.15);
  border-color: rgba(240, 190, 8, 0.8);
}

.stepCard:nth-child(2):hover {
  background: rgba(240, 190, 8, 0.15);
  border-color: #f0be08;
}

.stepCard:nth-child(3):hover {
  background: rgba(240, 190, 8, 0.15);
  border-color: #f0be08;
}

.stepIconContainer {
  width: 4rem;
  height: 4rem;
  margin: 0 auto 1rem;
  background: linear-gradient(135deg, rgba(240, 190, 8, 0.1), rgba(240, 190, 8, 0.2));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: 2px solid rgba(240, 190, 8, 0.3);
}

.stepCard:nth-child(1) .stepIconContainer {
  background: linear-gradient(135deg, rgba(240, 190, 8, 0.1), rgba(240, 190, 8, 0.2));
  border-color: rgba(240, 190, 8, 0.3);
}

.stepCard:nth-child(2) .stepIconContainer {
  background: linear-gradient(135deg,  rgba(240, 190, 8, 0.1), rgba(240, 190, 8, 0.2));
  border-color: rgba(240, 190, 8, 0.3);
}

.stepCard:nth-child(3) .stepIconContainer {
  background: linear-gradient(135deg,  rgba(240, 190, 8, 0.1), rgba(240, 190, 8, 0.2));
  border-color: rgba(240, 190, 8, 0.3);
}

.stepCard:hover .stepIconContainer {
  transform: scale(1.15) rotate(5deg);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.stepIconContainer svg {
  color: #1f2937;
  transition: color 0.3s ease;
}

.stepCard:nth-child(1):hover .stepIconContainer svg {
  color: #f0be08;
}

.stepCard:nth-child(2):hover .stepIconContainer svg {
  color: #f0be08;
}

.stepCard:nth-child(3):hover .stepIconContainer svg {
  color: #f0be08;
}

.stepTitle {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.75rem;
  transition: color 0.3s ease;
}

.stepDescription {
  color: #6b7280;
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 500;
  margin-bottom: 0;
}

/* Contact Section */
.contactContainer {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
  position: relative;
  z-index: 1;
}

.contactLayout {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: stretch;
}

@media (min-width: 1024px) {
  .contactLayout {
    flex-direction: row;
    align-items: flex-start;
  }
}

/* Social Icons */
.socialIcons {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
}

@media (min-width: 1024px) {
  .socialIcons {
    flex-direction: column;
    width: 4rem;
    justify-content: flex-start;
  }
}

.socialIcon {
  width: 3.5rem;
  height: 3.5rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.socialIcon::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.5s ease;
}

.socialIcon:hover::before {
  left: 100%;
}

.socialIcon:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.socialIcon.facebook:hover {
  background: rgba(59, 89, 152, 0.1);
  border-color: rgba(59, 89, 152, 0.3);
}

.socialIcon.twitter:hover {
  background: rgba(29, 161, 242, 0.1);
  border-color: rgba(29, 161, 242, 0.3);
}

.socialIcon.instagram:hover {
  background: rgba(225, 48, 108, 0.1);
  border-color: rgba(225, 48, 108, 0.3);
}

.socialIcon svg {
  color: #4b5563;
  transition: all 0.3s ease;
}

.socialIcon.facebook:hover svg {
  color: #3b5998;
}

.socialIcon.twitter:hover svg {
  color: #f0be08;
}

.socialIcon.instagram:hover svg {
  color: #f0be08;
}

/* Contact Form */
.contactForm {
  background: rgba(31, 41, 55, 0.85);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  padding: 2.5rem ;
  padding-bottom: 3.5 rem;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
}

.contactForm::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #f0be08, #3b82f6, #ec4899);
}

.contactForm::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(240, 190, 8, 0.1) 0%, transparent 70%);
  animation: rotate 20s linear infinite;
  pointer-events: none;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@media (min-width: 1024px) {
  .contactForm {
    width: 500px;
    height: 500px;
  }
}

.formHeader {
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
}

.formTitle {
  color: white;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  background: linear-gradient(135deg, #ffffff, #f0be08);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(240, 190, 8, 0.3);
}

.formDescription {
  color: #d1d5db;
  font-size: 1rem;
  line-height: 1.4;
  opacity: 0.9;
}

.formFields {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  z-index: 2;
}

.formField {
  position: relative;
}

.formInput,
.formTextarea {
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  color: white;
  padding: 0.7rem 1rem;
  outline: none;
  transition: all 0.3s ease;
  font-family: inherit;
  font-size: 1rem;
  backdrop-filter: blur(10px);
}

.formInput:focus,
.formTextarea:focus {
  border-color: #f0be08;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 0 3px rgba(240, 190, 8, 0.1);
  transform: translateY(-2px);
  backdrop-filter: blur(25px);
}

.formInput::placeholder,
.formTextarea::placeholder {
  color: #9ca3af;
  opacity: 0.8;
}

.formTextarea {
  resize: none;
  min-height: 120px;
}

.formButton {
  width: 100%;
  margin-top: 0.5rem;
  background: linear-gradient(135deg, #f0be08, #fbbf24);
  color: #1f2937;
  padding: 1rem 2rem;
  border-radius: 1rem;
  font-weight: 700;
  font-size: 1.1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(240, 190, 8, 0.4);
  position: relative;
  overflow: hidden;
  z-index: 2;
}

.formButton::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.formButton:hover::before {
  left: 100%;
}

.formButton:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(240, 190, 8, 0.6);
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
}

.formButton:active {
  transform: translateY(0);
}

/* Map Section */
.mapSection {
  flex: 1;
  min-height: 500px;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.mapContainer {
  position: relative;
  height: 500px;
  border-radius: 1rem;
  overflow: hidden;
}

.mapContainer iframe {
  width: 100%;
  height: 100%;
  border: none;
  filter: grayscale(10%) contrast(1.2) brightness(0.95);
  transition: filter 0.3s ease;
}

.mapSection:hover .mapContainer iframe {
  filter: grayscale(0%) contrast(1.3) brightness(1.05);
}

/* Responsive Design */
@media (max-width: 768px) {
  .stepsContainer {
    padding: 3rem 1rem 2rem;
  }
  
  .stepCard {
    padding: 1.25rem 1rem;
  }
  
  .contactForm {
    padding: 1.5rem;
    margin: 0 1rem;
  }
  
  .formTitle {
    font-size: 1.75rem;
  }
  
  .mapContainer {
    height: 350px;
  }
  
  .socialIcons {
    padding: 0 1rem;
  }
}

@media (max-width: 480px) {
  .stepCard {
    padding: 1rem 0.75rem;
  }
  
  .stepTitle {
    font-size: 1.25rem;
  }
  
  .stepDescription {
    font-size: 0.9rem;
  }
  
  .contactForm {
    padding: 1rem;
    margin-left: -1px;
  }
  
  .formTitle {
    font-size: 1.5rem;
  }
  
  .socialIcon {
    width: 3rem;
    height: 3rem;
  }
    .mapContainer {
    height: 450px;
  }
    .mapSection {
    min-height: 450px;
    }
}
      `}</style>
    </div>
    </Layout>
  );
}