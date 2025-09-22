'use client'
import React from "react";
// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
import { 
  Waves, 
  Dumbbell, 
  Car, 
  Shield, 
  Zap, 
  Phone, 
  Tv, 
  Users,
  Baby,
  Building,
  Camera,
  Flame
} from "lucide-react";

const amenities = [
  {
    icon: Waves,
    title: "Swimming Pool",
    description: "King size swimming pool with toddler pool at terrace",
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    icon: Dumbbell,
    title: "Club House & Gym",
    description: "Fully equipped gymnasium with modern equipment",
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    icon: Car,
    title: "Covered Parking",
    description: "Concrete interlock paving for car parking",
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    icon: Shield,
    title: "24/7 Security",
    description: "CCTV surveillance in visitors lounge and premises",
    color: "text-red-600",
    bgColor: "bg-red-100"
  },
  {
    icon: Zap,
    title: "Power Backup",
    description: "Generator for common and apartment lighting",
    color: "text-yellow-600",
    bgColor: "bg-yellow-100"
  },
  {
    icon: Phone,
    title: "Intercom System",
    description: "Telephone with centrex facility connection",
    color: "text-indigo-600",
    bgColor: "bg-indigo-100"
  },
  {
    icon: Tv,
    title: "Cable TV Ready",
    description: "Cable T.V. provision in all apartments",
    color: "text-pink-600",
    bgColor: "bg-pink-100"
  },
  {
    icon: Baby,
    title: "Children's Play Area",
    description: "Dedicated play area with modern play equipment",
    color: "text-orange-600",
    bgColor: "bg-orange-100"
  },
  {
    icon: Users,
    title: "Multipurpose Hall",
    description: "Community hall on fourth floor for events",
    color: "text-teal-600",
    bgColor: "bg-teal-100"
  },
  {
    icon: Building,
    title: "Visitors Lounge",
    description: "Attractive and comfortable visitors lounge",
    color: "text-cyan-600",
    bgColor: "bg-cyan-100"
  },
  {
    icon: Flame,
    title: "Gas Connection",
    description: "Reticulated gas connection for all apartments",
    color: "text-red-500",
    bgColor: "bg-red-50"
  },
  {
    icon: Shield,
    title: "Fire Safety",
    description: "Adequate fire fighting systems throughout",
    color: "text-gray-600",
    bgColor: "bg-gray-100"
  }
];

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="amenities-section">
      <div className="amenities-container">
        <div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="amenities-header"
        >
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
            <div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="amenity-card">
                <div className="amenity-card-content">
                  <div className="amenity-icon-container">
                    <amenity.icon className="amenity-icon" />
                  </div>
                  <h3 className="amenity-name">
                    {amenity.title}
                  </h3>
                  <p className="amenity-description">
                    {amenity.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Amenity Highlight */}
        <div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="featured-amenity"
        >
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
              <div className="featured-amenity-tag">
                King Size Pool
              </div>
              <div className="featured-amenity-tag">
                Toddler Pool
              </div>
              <div className="featured-amenity-tag">
                Terrace Location
              </div>
              <div className="featured-amenity-tag">
                Professional Maintenance
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
      /* Base styles */
.amenities-section {
  padding: 5rem 0;
  background-color: #000;
}

.amenities-container {
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 640px) {
  .amenities-container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .amenities-container {
    padding-left: 2rem;
    padding-right: 2rem;
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
  margin-left: auto;
  margin-right: auto;
}

/* Amenities grid */
.amenities-grid {
  display: grid;
  gap: 1.5rem;
  margin-bottom: 4rem;
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
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Amenity card */
.amenity-card {
  height: 100%;
  background-color: #374151;
  border: 1px solid #4b5563;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.amenity-card:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transform: scale(1.05);
}

.amenity-card-content {
  padding: 1.5rem;
  text-align: center;
}

.amenity-icon-container {
  width: 4rem;
  height: 4rem;
  background-color: rgba(251, 191, 36, 0.2);
  border: 1px solid rgba(251, 191, 36, 0.3);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
}

.amenity-card:hover .amenity-icon-container {
  transform: scale(1.1);
}

.amenity-icon {
  width: 2rem;
  height: 2rem;
  color: #facc15;
}

.amenity-name {
  font-size: 1.125rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.5rem;
}

.amenity-description {
  font-size: 0.875rem;
  color: #d1d5db;
  line-height: 1.5;
}

/* Featured amenity section */
.featured-amenity {
  background: linear-gradient(to right, #facc15, #eab308);
  border-radius: 1.5rem;
  padding: 2rem;
  color: #000;
  text-align: center;
}

@media (min-width: 768px) {
  .featured-amenity {
    padding: 3rem;
  }
}

.featured-amenity-content {
  max-width: 64rem;
  margin-left: auto;
  margin-right: auto;
}

.featured-amenity-icon-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.featured-amenity-icon-wrapper {
  width: 5rem;
  height: 5rem;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 9999px;
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
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 9999px;
}

/* Animation classes for motion components */
.motion-initial {
  opacity: 0;
  transform: translateY(20px);
}

.motion-while-in-view {
  opacity: 1;
  transform: translateY(0);
}

.motion-transition {
  transition: all 0.8s ease;
}

.motion-card-initial {
  opacity: 0;
  transform: translateY(30px);
}

.motion-card-while-in-view {
  opacity: 1;
  transform: translateY(0);
}

.motion-card-transition {
  transition: all 0.6s ease;
}`}</style>
    </section>
  );
}