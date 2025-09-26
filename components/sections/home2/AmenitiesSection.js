'use client'
import React from "react";
import { Waves, Dumbbell, Users, Car, Shield, Zap, Phone, Tv, Baby, Flame, Building } from "lucide-react";

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
  { icon: Flame, title: "Gas Connection" },
  { icon: Shield, title: "Fire Safety" }
];

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="amenities-section">
      {/* Video Background with Overlay */}
      <div className="video-background">
        <video autoPlay loop muted playsInline className="background-video">
          <source src="assets/Namko builders.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
        </video>
        <div className="video-overlay"></div>
      </div>

      <div className="amenities-container">
        <div className="amenities-header">
          <h2 className="amenities-title">
            World-Class <span className="amenities-title-highlight">Amenities</span>
          </h2>
          <p className="amenities-description">
            Experience resort-style living with our comprehensive range of amenities 
            designed to enhance your lifestyle and provide ultimate comfort.
          </p>
        </div>

        <div className="amenities-grid">
          {amenities.map((amenity, index) => (
            <div key={index} className="amenity-card">
              <div className="amenity-card-content">
                <div className="amenity-icon-container">
                  <amenity.icon className="amenity-icon" />
                </div>
                <h3 className="amenity-name">{amenity.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Amenity Highlight */}
        <div className="featured-amenity">
          <div className="featured-amenity-content">
            <div className="featured-amenity-icon-container">
              <div className="featured-amenity-icon-wrapper">
                <Waves className="featured-amenity-icon" />
              </div>
            </div>
            <h3 className="featured-amenity-title">
              Resort-Style Swimming Pool
            </h3>
            <p className="featured-amenity-description">
              Dive into luxury with our king-size swimming pool featuring a dedicated toddler pool, 
              perfect for the whole family to enjoy year-round.
            </p>
            <div className="featured-amenity-tags">
              <div className="featured-amenity-tag">King Size Pool</div>
              <div className="featured-amenity-tag">Toddler Pool</div>
              <div className="featured-amenity-tag">Terrace Location</div>
              <div className="featured-amenity-tag">Professional Maintenance</div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        /* Base styles */
        .amenities-section {
          position: relative;
          padding: 5rem 0;
          overflow: hidden;
          color: white;
        }

        /* Video Background */
        .video-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .background-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          z-index: 2;
        }

        /* Content Container */
        .amenities-container {
          position: relative;
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1rem;
          z-index: 3;
        }

        @media (min-width: 640px) {
          .amenities-container {
            padding: 0 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .amenities-container {
            padding: 0 2rem;
          }
        }

        /* Header section */
        .amenities-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .amenities-title {
          font-size: 2.25rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 1.5rem;
        }

        @media (min-width: 768px) {
          .amenities-title {
            font-size: 3rem;
          }
        }

        .amenities-title-highlight {
          color: #facc15;
        }

        .amenities-description {
          font-size: 1.25rem;
          color: #d1d5db;
          max-width: 48rem;
          margin: 0 auto;
        }

        /* Amenities grid */
        .amenities-grid {
          display: grid;
          gap: 1.5rem;
          margin-bottom: 4rem;
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
            grid-template-columns: repeat(6, 1fr);
          }
        }

        /* Amenity card - Updated for single row layout */
        .amenity-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(232, 203, 12, 0.31);
          transition: all 0.3s ease;
        }

        .amenity-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(250, 204, 21, 0.3);
          border-color: #facc15;
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
          color: #facc15;
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
        }

        /* Featured amenity section */
        .featured-amenity {
          background: rgba(250, 204, 21, 0.6);
          border-radius: 0.5rem;
          padding: 2rem;
          color: #000;
          text-align: center;
          backdrop-filter: blur(10px);
        }

        @media (min-width: 768px) {
          .featured-amenity {
            padding: 3rem;
          }
        }

        .featured-amenity-content {
          max-width: 64rem;
          margin: 0 auto;
        }

        .featured-amenity-icon-container {
          display: flex;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .featured-amenity-icon-wrapper {
          width: 5rem;
          height: 5rem;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .featured-amenity-icon {
          width: 2.5rem;
          height: 2.5rem;
          color: #000;
        }

        .featured-amenity-title {
          font-size: 1.875rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        @media (min-width: 768px) {
          .featured-amenity-title {
            font-size: 2.25rem;
          }
        }

        .featured-amenity-description {
          font-size: 1.25rem;
          color: rgba(0, 0, 0, 0.8);
          margin-bottom: 2rem;
          max-width: 42rem;
          margin-left: auto;
          margin-right: auto;
        }

        .featured-amenity-tags {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .featured-amenity-tag {
          background: rgba(0, 0, 0, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          color: white;
        }
      `}</style>
    </section>
  );
}