import { slides } from "@/lib/slides";

export default function Slide1() {
  const slide = slides[0];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 transition-all duration-500 ease-in-out dark-gradient text-white">
      <div className="w-full max-w-5xl mb-6 card p-2">
        <img 
          src={slide.image} 
          alt={`Slide ${slide.id}`} 
          className="w-full h-auto rounded-lg"
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
        Slide 1 of {slides.length}
      </div>
    </div>
  );
}
