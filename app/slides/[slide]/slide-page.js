import { slides } from "@/lib/slides";

export default function Slide({ params }) {
  const slideId = parseInt(params.slide);
  const slide = slides.find((s) => s.id === slideId);
  
  if (!slide) {
    return (
      <div className="h-screen flex items-center justify-center dark-gradient text-white">
        <p className="section-title">Slide not found</p>
      </div>
    );
  }
  
  const prevSlide = slideId > 1 ? slideId - 1 : null;
  const nextSlide = slideId < slides.length ? slideId + 1 : null;

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
        {prevSlide && (
          <a
            href={`/slides/${prevSlide}`}
            className="btn-secondary"
          >
            ← Previous
          </a>
        )}
        
        <a
          href="/"
          className="btn-primary"
        >
          Home
        </a>
        
        {nextSlide && (
          <a
            href={`/slides/${nextSlide}`}
            className="btn-secondary"
          >
            Next →
          </a>
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
        Slide {slideId} of {slides.length}
      </div>
    </div>
  );
}
