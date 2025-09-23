'use client'
import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Shield, Zap, ArrowRight, Sparkles } from 'lucide-react';
import './StatsPage.css';

const StatCard = ({ icon, value, numericValue, description, delay, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = numericValue / steps;
      let current = 0;
      
      const counter = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setCount(numericValue);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [numericValue, delay]);

  const formatCount = (num) => {
    if (suffix === 'X') return `${num}X`;
    if (suffix === '%') return `${num}%`;
    return num.toString();
  };

  return (
    <div 
      className={`stat-card ${isVisible ? 'stat-card-visible' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Animated background gradient */}
      <div className="stat-card-bg"></div>
      
      {/* Sparkle effect */}
      <div className="stat-card-sparkle">
        <Sparkles size={20} />
      </div>
      
      <div className="stat-card-content">
        <div className="stat-card-header">
          <div className="stat-card-icon">
            {icon}
          </div>
        </div>
        
        <div className="stat-card-value">
          {formatCount(count)}
        </div>
        
        <div className="stat-card-description">
          {description}
        </div>
        
        {/* Progress bar */}
        <div className="stat-card-progress">
          <div 
            className="stat-card-progress-bar"
            style={{ 
              width: isVisible ? '100%' : '0%', 
              transitionDelay: `${delay + 500}ms` 
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const StatsPage = () => {
  const stats = [
    {
      icon: <TrendingUp size={32} />,
      value: "95%",
      numericValue: 95,
      description: "Customer Satisfaction",
      delay: 200,
      suffix: '%'
    },
    {
      icon: <Users size={32} />,
      value: "90", 
      numericValue: 90,
      description: "Square Feet Built",
      delay: 400,
      suffix: '%'
    },
    {
      icon: <Shield size={32} />,
      value: "97%",
      numericValue: 97,
      description: "On-Time Delivery Rate", 
      delay: 600,
      suffix: '%'
    },
    {
      icon: <Zap size={32} />,
      value: "3X",
      numericValue: 3,
      description: "Skilled Workforce",
      delay: 800,
      suffix: 'X'
    }
  ];

  return (
    <div className="stats-page">
      {/* Enhanced background decorations */}
      <div className="stats-page-bg">
        <div className="stats-page-decorations">
          <div className="decoration decoration-1"></div>
          <div className="decoration decoration-2"></div>
          <div className="decoration decoration-3"></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="grid-pattern"></div>
      </div>
      
      <div className="stats-container">
        <div className="stats-grid">
          
          {/* Left side - Enhanced Image Section */}
          <div className="stats-content">
            <div className="stats-text">
              <div className="stats-badge">
                <Sparkles size={16} />
                <span>SOLUTIONS IN ACTION</span>
              </div>
              
              <h1 className="stats-title">
                Build a{' '}
                <span className="stats-title-highlight">
                  stronger future
                </span>
                {' '}with Namko
              </h1>
              
              <p className="stats-description">
                Harness the strength of a unified construction management solution.
                 Focus on your projects, not on paperwork.
              </p>
            </div>
            
            {/* <div className="stats-image-container">
              <img 
                src="/image.png" 
                alt="Business solutions visualization" 
                className="stats-image"
              />
            </div> */}
            
            {/* Enhanced CTA Buttons */}
            <div className="stats-buttons">
              <button className="btn-primary">
                <span className="btn-content">
                  Try the solution today
                  <ArrowRight size={18} />
                </span>
                <div className="btn-overlay"></div>
              </button>
              
              <button className="btn-secondary">
                <span className="btn-content">
                  Questions? Talk to us
                  <ArrowRight size={18} />
                </span>
              </button>
            </div>
          </div>

          {/* Right side - Enhanced Stats Grid */}
          <div className="stats-cards">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                value={stat.value}
                numericValue={stat.numericValue}
                description={stat.description}
                delay={stat.delay}
                suffix={stat.suffix}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced bottom decoration */}
      <div className="bottom-decoration">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="wave-svg">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3"/>
              <stop offset="50%" stopColor="#eab308" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="#facc15" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="url(#waveGradient)"/>
        </svg>
      </div>
    </div>
  );
};

export default StatsPage;