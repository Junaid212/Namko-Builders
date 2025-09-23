'use client'
import React, { useState, useEffect } from "react";
// import { Image } from "@/entities/Image";
// import { Card, CardContent } from "@/components/ui/card";
import { Camera } from "lucide-react";

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    try {
      const data = await Image.list("-created_date");
      setImages(data);
    } catch (error) {
      console.error("Error loading images:", error);
    }
  };

  return (
    <div className="min-vh-100 bg-light p-4">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center mb-4">
          <h1 className="h2 fw-bold text-dark">Gallery</h1>
        </div>

        <div className="row g-3">
          {images.map((image) => (
            <div key={image.id} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2-4">
              <div className="h-100 overflow-hidden">
                <div className="ratio ratio-1x1">
                  <img
                    src={image.file_url}
                    alt={image.title}
                    className="img-cover hover-zoom"
                  />
                </div>
                <div className="p-2">
                  <h3 className="h6 fw-medium text-dark text-truncate mb-0">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {images.length === 0 && (
          <div className="text-center py-5">
            <Camera className="text-muted mb-3" style={{width: '64px', height: '64px'}} />
            <h3 className="h5 fw-medium text-secondary mb-2">No images in the gallery</h3>
            <p className="text-muted">There are currently no images to display.</p>
          </div>
        )}
      </div>

      <style>{`
        .img-cover {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
        .hover-zoom {
          transition: transform 0.2s ease-in-out;
        }
        .hover-zoom:hover {
          transform: scale(1.05);
        }
        .col-xl-2-4 {
          flex: 0 0 auto;
          width: 20%;
        }
        @media (max-width: 1200px) {
          .col-xl-2-4 {
            width: 25%;
          }
        }
        @media (max-width: 992px) {
          .col-xl-2-4 {
            width: 33.333%;
          }
        }
        @media (max-width: 768px) {
          .col-xl-2-4 {
            width: 50%;
          }
        }
        @media (max-width: 576px) {
          .col-xl-2-4 {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}