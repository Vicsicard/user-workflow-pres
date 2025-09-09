import { slides } from "@/lib/slides";
import ClientSlide from "./client-slide";

export function generateStaticParams() {
  return slides.map((slide) => ({
    slide: slide.id.toString(),
  }));
}

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
    <ClientSlide 
      slide={slide} 
      prevSlide={prevSlide} 
      nextSlide={nextSlide} 
      totalSlides={slides.length} 
    />
  );
}
