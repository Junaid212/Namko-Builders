'use client'
import React from 'react';
import { Leaf, Shield, Recycle, Lightbulb, Eye, Target } from 'lucide-react';
import './VisionMissionPage.css';

function VisionMissionPage() {
  return (
    <div className="app-container">
      <div className="main-wrapper">
        {/* Main Container with Rounded Border */}
        <div className="main-container">
          
          {/* Yellow Top Bar */}
          <div className="yellow-bar">
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <Leaf />
                </div>
                <p className="feature-text">
                  Freshness
                </p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <Shield />
                </div>
                <p className="feature-text">
                  Trust &<br />Transparency
                </p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <Recycle />
                </div>
                <p className="feature-text">
                  Sustainability
                </p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <Lightbulb />
                </div>
                <p className="feature-text">
                  Innovation
                </p>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="content-area">
            <div className="vision-mission-grid">
              
              {/* Vision Section */}
              <div>
                <div className="section-header">
                  <div className="section-icon">
                    <Eye />
                  </div>
                  <h3 className="section-title">Vision</h3>
                </div>
                <p className="section-text">
                  To be recognized as a trusted builder, known for innovation, excellence, and customer satisfaction in every project.
                </p>
              </div>

              {/* Mission Section */}
              <div>
                <div className="section-header">
                  <div className="section-icon">
                    <Target />
                  </div>
                  <h3 className="section-title">Mission</h3>
                </div>
                <p className="section-text">
                  To create homes that blend quality, comfort, and modern living, while delivering value to every homeowner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisionMissionPage;