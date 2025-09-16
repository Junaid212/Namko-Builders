'use client';
import React, { useState, useEffect } from 'react';

function StatsSection() {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [animatingIndex, setAnimatingIndex] = useState(null);
  
  const stats = [
    {
      target: 48,
      suffix: "+",
      description: "Designers and developers",
      bgColor: "bg-gray-800"
    },
    {
      target: 256,
      suffix: "+", 
      description: "Awards for digital art work",
      bgColor: "bg-red-500"
    },
    {
      target: 48,
      suffix: "+",
      description: "Designers and developers", 
      bgColor: "bg-gray-800"
    },
    {
      target: 256,
      suffix: "+",
      description: "Awards for digital art work",
      bgColor: "bg-red-500"
    }
  ];

  const startAnimation = (index) => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;
    
    let currentStep = 0;
    const targetIndex = index ?? -1; // -1 means animate all
    
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters(prevCounters => prevCounters.map((counter, i) => 
        targetIndex === -1 || targetIndex === i 
          ? Math.floor(stats[i].target * progress)
          : counter
      ));
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(prevCounters => prevCounters.map((counter, i) => 
          targetIndex === -1 || targetIndex === i 
            ? stats[i].target
            : counter
        ));
        setAnimatingIndex(null);
      }
    }, stepDuration);
    
    return () => clearInterval(timer);
  };

  const handleHover = (index) => {
    setAnimatingIndex(index);
    setCounters(prevCounters => prevCounters.map((counter, i) => 
      i === index ? 0 : counter
    ));
    setTimeout(() => startAnimation(index), 50);
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <div className="stats-container">
      <div className="stats-wrapper">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`stat-card ${index % 2 === 0 ? 'dark' : 'red'}`}
              onMouseEnter={() => handleHover(index)}
            >
              <div className="stat-number">
                {counters[index]}{stat.suffix}
              </div>
              <div className="stat-description">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="controls">
          <button 
            className="restart-button"
            onClick={() => {
              setAnimatingIndex(null);
              setCounters([0, 0, 0, 0]);
              setTimeout(() => startAnimation(), 100);
            }}
          >
            Restart Animation
          </button>
        </div> */}
      </div>
      <style jsx>{`
        /* Statistics Page Styles */
        .stats-container {
          min-height: 40vh;
          background-color: #161d2aff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .stats-wrapper {
          max-width: 72rem;
          width: 100%;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          overflow: hidden;
          border-radius: 0.5rem;
        }

        .stat-card {
          padding: 3rem 2rem;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .stat-card:hover {
          transform: scale(1.05);
        }

        .stat-card.dark {
          background-color: #11161F;
        }

        .stat-card.red {
          background-color: #EEAC2F;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 1rem;
          font-family: 'Courier New', monospace;
          line-height: 1;
        }

        .stat-description {
          font-size: 1.125rem;
          font-weight: 500;
          line-height: 1.25;
        }

        .controls {
          text-align: center;
          margin-top: 2rem;
        }

        .restart-button {
          background-color: #2563eb;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 500;
          transition: all 0.2s ease;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          border: none;
          cursor: pointer;
        }

        .restart-button:hover {
          background-color: #1d4ed8;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        /* Responsive Design */
        @media (min-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          
          .stat-number {
            font-size: 3.75rem;
          }
        }
      `}</style>
    </div>
  );
}

export default StatsSection;