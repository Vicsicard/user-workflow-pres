"use client";

import { useState } from 'react';
import { slides } from "../../lib/slides";

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = slides[currentSlide];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 transition-all duration-500 ease-in-out dark-gradient text-white">
      <div className="w-full max-w-7xl mb-6 card p-2 flex-1 flex items-center justify-center">
        <img 
          src={slide.image} 
          alt={`Slide ${slide.id}`} 
          className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
        />
      </div>
      
      <div className="flex gap-4 mb-6">
        {currentSlide > 0 && (
          <button
            onClick={prevSlide}
            className="btn-secondary"
          >
            ← Previous
          </button>
        )}
        
        <button
          onClick={goHome}
          className="btn-primary"
        >
          Home
        </button>
        
        {currentSlide < slides.length - 1 && (
          <button
            onClick={nextSlide}
            className="btn-secondary"
          >
            Next →
          </button>
        )}
      </div>
      
      
      <div className="absolute bottom-4 right-4 text-gray-light text-sm">
        Slide {currentSlide + 1} of {slides.length}
      </div>
    </div>
  );
}
