"use client";

import React from "react";
import { slides } from "@/lib/slides";
import Link from "next/link";

// Generate static params for all slides
export function generateStaticParams() {
  return slides.map((slide) => ({
    slide: slide.id.toString(),
  }));
}

export default function Slide({ params }: { params: { slide: string } }) {
  const slideId = parseInt(params.slide);
  const slide = slides.find((s) => s.id === slideId);
  
  if (!slide) {
    return <div className="h-screen flex items-center justify-center">Slide not found</div>;
  }
  
  const prevSlide = slideId > 1 ? slideId - 1 : null;
  const nextSlide = slideId < slides.length ? slideId + 1 : null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 transition-all duration-500 ease-in-out">
      <div className="w-full max-w-4xl mb-6">
        <img 
          src={slide.image} 
          alt={`Slide ${slide.id}`} 
          className="w-full h-auto shadow-lg rounded-lg"
        />
      </div>
      
      <div className="flex gap-4 mb-6">
        {prevSlide && (
          <Link
            href={`/slides/${prevSlide}`}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
          >
            ← Previous
          </Link>
        )}
        
        <Link
          href="/"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Home
        </Link>
        
        {nextSlide && (
          <Link
            href={`/slides/${nextSlide}`}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
          >
            Next →
          </Link>
        )}
      </div>
      
      {slide.notes && slide.notes.length > 0 && (
        <div className="w-full max-w-2xl p-4 bg-gray-100 rounded-lg">
          <h3 className="font-semibold text-gray-700 mb-2">Presenter Notes:</h3>
          <ul className="list-disc pl-5">
            {slide.notes.map((note, index) => (
              <li key={index} className="text-gray-700">{note}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
