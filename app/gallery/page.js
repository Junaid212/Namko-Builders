'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';


export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      src: 'assets/img/gallery/1.webp',
      alt: 'Modern Architecture'
    },
    {
      id: 2,
      src: 'assets/img/gallery/2.webp',
      alt: 'City Skyline'
    },
    {
      id: 3,
      src: 'assets/img/gallery/3.webp',
      alt: 'Interior Design'
    },
    {
      id: 4,
      src: 'assets/img/gallery/4.webp',
      alt: 'Luxury Home'
    },
    {
      id: 5,
      src: 'assets/img/gallery/5.webp',
      alt: 'Contemporary Living'
    },
    {
      id: 6,
      src: 'assets/img/gallery/6.webp',
      alt: 'Modern Kitchen'
    },
    {
      id: 7,
      src: 'assets/img/gallery/7.webp',
      alt: 'Bedroom Design'
    },
    {
      id: 8,
      src: 'assets/img/gallery/8.webp',
      alt: 'Office Space'
    },
    {
      id: 9,
      src: 'assets/img/gallery/9.webp',
      alt: 'Dining Room'
    },
    {
      id: 10,
      src: 'assets/img/gallery/10.webp',
      alt: 'Bathroom Design'
    },
    {
      id: 11,
      src: 'assets/img/gallery/11.webp',
      alt: 'Garden View'
    },
    {
      id: 12,
      src: 'assets/img/gallery/12.webp',
      alt: 'Balcony Space'
    }
  ];

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
     <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Contact Us">
                <div></div>
    <div className="app">
      {/* Header */}
      <div className="header">
        
      </div>

      {/* Gallery Grid */}
      <div className="gallery-container">
        <div className="gallery-grid">
          {images.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => openModal(image.src)}
            >
              <div className="image-container">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="gallery-image"
                />
              </div>
              
              {/* Hover Overlay */}
              <div className="hover-overlay">
                <div className="zoom-icon-container">
                  <div className="zoom-icon-bg">
                    <ZoomIn className="zoom-icon" />
                  </div>
                </div>
              </div>

              {/* Image Title */}
              <div className="image-title-overlay">
                <h3 className="image-title">
                  {image.alt}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              onClick={closeModal}
              className="close-button"
            >
              <X className="close-icon" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="modal-image"
            />
          </div>
        </div>
      )}
      <style>
        {`
.app {
  min-height: 100vh;
  background-color: #f9fafb;
}

/* Header Styles */
.header {
  background-color: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid #e5e7eb;
}

.header-content {
  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem 1rem;
}

@media (min-width: 640px) {
  .header-content {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .header-content {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .title {
    font-size: 3rem;
  }
}

.description {
  font-size: 1.125rem;
  color: #4b5563;
  max-width: 32rem;
  margin: 0;
}

/* Gallery Container */
.gallery-container {
  max-width: 80rem;
  margin: 0 auto;
  padding: 3rem 1rem;
}

@media (min-width: 640px) {
  .gallery-container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .gallery-container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

/* Gallery Grid */
.gallery-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 640px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1280px) {
  .gallery-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Gallery Item */
.gallery-item {
  position: relative;
  background-color: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: box-shadow 0.3s ease;
}

.gallery-item:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Image Container */
.image-container {
  aspect-ratio: 1;
  overflow: hidden;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.1);
}

/* Hover Overlay */
.hover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.gallery-item:hover .hover-overlay {
  background-color: rgba(0, 0, 0, 0.4);
}

.zoom-icon-container {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .zoom-icon-container {
  opacity: 1;
}

.zoom-icon-bg {
  // background-color: rgba(255, 255, 255, 0.9);
  padding: 0.75rem;
  border-radius: 50%;
}

.zoom-icon {
  height: 1.5rem;
  width: 1.5rem;
  color: #1f2937;
}

/* Image Title Overlay */
.image-title-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 1), transparent);
  padding: 1rem;
}

.image-title {
  color: white;
  font-weight: 500;
  font-size: 0.875rem;
  margin: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .image-title {
  opacity: 1;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.modal-content {
  position: relative;
  max-width: 56rem;
  max-height: 100%;
}

.close-button {
  position: absolute;
  top: -3rem;
  right: 0;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;
}

.close-button:hover {
  color: #d1d5db;
}

.close-icon {
  height: 2rem;
  width: 2rem;
}

.modal-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 0.5rem;
}
`}
      </style>
    </div>
    

    

            </Layout>
        </>
  )
}

