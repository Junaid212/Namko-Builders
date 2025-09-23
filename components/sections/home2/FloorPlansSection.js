'use client'
import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
import { Home, Square, Bed, Bath, Users, Eye } from "lucide-react";

const floorPlans = [
  {
    id: "2bhk-b",
    type: "2 BHK",
    name: "Type B",
    area: "1420",
    price: "₹45-50 Lakhs",
    features: ["2 Bedrooms", "2 Bathrooms", "Living/Dining", "Kitchen", "Balcony"],
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=600&h=400&fit=crop&auto=format",
    description: "Compact yet spacious 2-bedroom apartment perfect for small families"
  },
  {
    id: "2bhk-b1",
    type: "2 BHK",
    name: "Type B1",
    area: "1430",
    price: "₹46-51 Lakhs",
    features: ["2 Bedrooms", "2 Bathrooms", "Living/Dining", "Kitchen", "Balcony"],
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop&auto=format",
    description: "Enhanced 2-bedroom layout with optimized space utilization"
  },
  {
    id: "3bhk-a",
    type: "3 BHK",
    name: "Type A",
    area: "1950-1985",
    price: "₹65-75 Lakhs",
    features: ["3 Bedrooms", "3 Bathrooms", "Living/Dining", "Kitchen", "2 Balconies"],
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop&auto=format",
    description: "Spacious 3-bedroom apartment with premium features and dual balconies"
  },
  // {
  //   id: "3bhk-c",
  //   type: "3 BHK",
  //   name: "Type C",
  //   area: "1670-1745",
  //   price: "₹58-68 Lakhs",
  //   features: ["3 Bedrooms", "2 Bathrooms", "Living/Dining", "Kitchen", "Balcony"],
  //   image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&h=400&fit=crop&auto=format",
  //   description: "Well-designed 3-bedroom unit with efficient layout and modern amenities"
  // },
  // {
  //   id: "duplex",
  //   type: "Duplex",
  //   name: "Type D, E, F",
  //   area: "2470-3510",
  //   price: "₹85 Lakhs - 1.2 Cr",
  //   features: ["4-5 Bedrooms", "4-5 Bathrooms", "2 Levels", "Multiple Balconies", "Premium"],
  //   image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop&auto=format",
  //   description: "Luxurious duplex apartments with expansive living spaces across two floors"
  // }
];

export default function FloorPlansSection() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <section id="floorplans" className="floor-plans-section">
      <div className="floor-plans-container">
        <div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">
            Choose Your <span className="section-title-accent">Perfect Home</span>
          </h2>
          <p className="section-description">
            From cozy 2-bedroom apartments to luxurious duplexes, find the perfect space 
            that matches your lifestyle and dreams.
          </p>
        </div>

        <div className="plans-grid">
          {floorPlans.map((plan, index) => (
            <div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="plan-card" onClick={() => setSelectedPlan(plan)}>
                <div className="plan-image-container">
                  <img
                    src={plan.image}
                    alt={`${plan.type} ${plan.name}`}
                    className="plan-image"
                  />
                  <div className="plan-badge">
                    {plan.type}
                  </div>
                  {/* <div className="plan-overlay">
                    <button
                      variant="secondary"
                      className="view-details-btn"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </button>
                  </div> */}
                </div>

                <div className="plan-content">
                  <div className="plan-header">
                    <h3 className="plan-name">{plan.name}</h3>
                    <div className="plan-area">
                      <Square className="w-4 h-4 mr-1" />
                      {plan.area} sq ft
                    </div>
                  </div>

                  <p className="plan-description">{plan.description}</p>

                  <div className="features-container">
                    {plan.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="feature-tag"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="plan-footer">
                    {/* <div className="plan-price">{plan.price}</div> */}
                    <button variant="outline" size="sm" className="learn-more-btn">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="features-highlight">
            <h3 className="features-title">
              All Floor Plans Include
            </h3>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <Home className="w-6 h-6 text-yellow-400" />
                </div>
                <h4 className="feature-item-title">Premium Fittings</h4>
                <p className="feature-item-description">Jaguar fittings, granite countertops</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <Users className="w-6 h-6 text-yellow-400" />
                </div>
                <h4 className="feature-item-title">Ready to Move</h4>
                <p className="feature-item-description">Immediate possession available</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <Square className="w-6 h-6 text-yellow-400" />
                </div>
                <h4 className="feature-item-title">Spacious Design</h4>
                <p className="feature-item-description">Optimized layouts, ample storage</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <style>{`
      .floor-plans-section {
  padding: 5rem 0;
  background-color: #111827;
}

.floor-plans-container {
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 640px) {
  .floor-plans-container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .floor-plans-container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
}

@media (min-width: 768px) {
  .section-title {
    font-size: 3rem;
  }
}

.section-title-accent {
  color: #fbbf24;
}

.section-description {
  font-size: 1.25rem;
  color: #d1d5db;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
}

.plans-grid {
  display: grid;
  gap: 2rem;
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .plans-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .plans-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.plan-card {
  overflow: hidden;
  cursor: pointer;
  background-color: #1f2937;
  border: 1px solid #374151;
  border-radius: 0.1rem;
  transition: all 0.3s ease;
}

.plan-card:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.plan-image-container {
  position: relative;
  overflow: hidden;
}

.plan-image {
  width: 100%;
  height: 12rem;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.plan-card:hover .plan-image {
  transform: scale(1.1);
}

.plan-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: #fbbf24;
  color: black;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 0.2rem;
  font-size: 0.875rem;
}

.plan-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.plan-card:hover .plan-overlay {
  background-color: rgba(0, 0, 0, 0.2);
}

.view-details-btn {
  opacity: 0;
  transform: scale(0.9);
  background-color: #fbbf24;
  color: black;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.view-details-btn:hover {
  background-color: #fcd34d;
}

.plan-card:hover .view-details-btn {
  opacity: 1;
  transform: scale(1);
}

.plan-content {
  padding: 1.5rem;
  background-color: #1f2937;
}

.plan-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
}

.plan-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
}

.plan-area {
  display: flex;
  align-items: center;
  color: #fbbf24;
  font-weight: 600;
  text-align: right;
}

.plan-description {
  color: #d1d5db;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.features-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.feature-tag {
  background-color: #374151;
  color: #e5e7eb;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
}

.plan-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.plan-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fbbf24;
}

.learn-more-btn {
  border: 1px solid #fbbf24;
  color: #fbbf24;
  background: transparent;
  padding: 0.375rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.learn-more-btn:hover {
  background-color: #fbbf24;
  color: black;
}

.features-highlight {
  background-color: #1f2937;
  border: 1px solid #374151;
  border-radius: 0.1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  padding: 2rem;
  max-width: 56rem;
  margin-left: auto;
  margin-right: auto;
}

.features-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  text-align: center;
}

.features-grid {
  display: grid;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.feature-item {
  text-align: center;
}

.feature-icon {
  width: 3rem;
  height: 3rem;
  background-color: rgba(251, 191, 36, 0.2);
  border: 1px solid rgba(251, 191, 36, 0.3);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0.75rem;
}

.feature-icon svg {
  width: 1.5rem;
  height: 1.5rem;
  color: #fbbf24;
}

.feature-item-title {
  font-weight: 600;
  color: white;
  margin-bottom: 0.25rem;
}

.feature-item-description {
  font-size: 0.875rem;
  color: #d1d5db;
}

/* Animation classes for motion components */
.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
}

.fade-in-up.animate {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-in-up-delayed {
  opacity: 0;
  transform: translateY(30px);
}

.fade-in-up-delayed.animate {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.6s ease, transform 0.6s ease;
}`}</style>
    </section>
  );
}