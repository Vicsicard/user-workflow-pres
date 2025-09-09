import { slides } from "../../lib/slides";

export default function Slide1() {
  const slide = slides[0];

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
        <a
          href="/"
          className="btn-primary"
        >
          Home
        </a>
        
        <a
          href="/slide2"
          className="btn-secondary"
        >
          Next →
        </a>
      </div>
      
      
      <div className="absolute bottom-4 right-4 text-gray-light text-sm">
        Slide 1 of {slides.length}
      </div>
    </div>
  );
}
