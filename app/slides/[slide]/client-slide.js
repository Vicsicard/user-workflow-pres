"use client";

import { useRouter } from 'next/navigation';

export default function ClientSlide({ slide, prevSlide, nextSlide, totalSlides }) {
  const router = useRouter();
  const slideId = slide.id;

  const goToPrevSlide = () => {
    if (prevSlide) {
      router.push(`/slides/${prevSlide}`);
    }
  };

  const goToNextSlide = () => {
    if (nextSlide) {
      router.push(`/slides/${nextSlide}`);
    }
  };

  const goToHome = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 transition-all duration-500 ease-in-out dark-gradient text-white">
      <div className="w-full max-w-5xl mb-6 card p-2 animate-[float_6s_ease-in-out_infinite]">
        <img 
          src={slide.image} 
          alt={`Slide ${slide.id}`} 
          className="w-full h-auto rounded-lg"
        />
      </div>
      
      <div className="flex gap-4 mb-6">
        {prevSlide && (
          <button
            onClick={goToPrevSlide}
            className="btn-secondary"
          >
            ← Previous
          </button>
        )}
        
        <button
          onClick={goToHome}
          className="btn-primary"
        >
          Home
        </button>
        
        {nextSlide && (
          <button
            onClick={goToNextSlide}
            className="btn-secondary"
          >
            Next →
          </button>
        )}
      </div>
      
      {slide.notes && slide.notes.length > 0 && (
        <div className="w-full max-w-3xl p-6 bg-dark-light rounded-lg border border-primary-light bg-opacity-80">
          <h3 className="tagline text-primary-light mb-4">Presenter Notes:</h3>
          <ul className="list-disc pl-5">
            {slide.notes.map((note, index) => (
              <li key={index} className="body-text text-light mb-2">{note}</li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="absolute bottom-4 right-4 text-gray-light text-sm">
        Slide {slideId} of {totalSlides}
      </div>
    </div>
  );
}
