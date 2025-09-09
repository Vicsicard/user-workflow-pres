import { slides } from "@/lib/slides";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return slides.map((slide) => ({
    slide: slide.id.toString(),
  }));
}

export default function Slide({ params }: { params: { slide: string } }) {
  const slideId = parseInt(params.slide);
  const slide = slides.find((s) => s.id === slideId);
  
  if (!slide) {
    notFound();
  }
  
  const prevSlide = slideId > 1 ? slideId - 1 : null;
  const nextSlide = slideId < slides.length ? slideId + 1 : null;

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center transition-all duration-500 ease-in-out">
      <div className="relative w-full max-w-4xl h-auto">
        <Image 
          src={slide.image} 
          alt={`Slide ${slide.id}`} 
          width={1024} 
          height={768} 
          className="w-full h-auto shadow-lg"
          priority
        />
      </div>
      
      <div className="flex mt-6 space-x-4">
        {prevSlide && (
          <Link
            href={`/slides/${prevSlide}`}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
          >
            ← Back
          </Link>
        )}
        
        <Link
          href="/"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          🏠 Home
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
        <div className="mt-6 p-4 bg-gray-100 rounded-md max-w-2xl">
          <h3 className="text-sm font-semibold text-gray-500 mb-2">Presenter Notes:</h3>
          <ul className="list-disc pl-5">
            {slide.notes.map((note, index) => (
              <li key={index} className="text-sm text-gray-700">{note}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
