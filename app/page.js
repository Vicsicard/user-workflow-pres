export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center primary-gradient text-white">
      <div className="max-w-4xl mx-auto px-4 py-16 animate-[float_6s_ease-in-out_infinite]">
        <h1 className="headline mb-6">AHP Mod 2.0</h1>
        <p className="tagline mb-4">The Protocol That Powers Human-AI Communication</p>
        <p className="subheadline mb-12 max-w-2xl mx-auto">Shows you what AI sees—and how to fix it.</p>
        
        <div className="mt-12">
          <a 
            href="/slides/1" 
            className="btn-primary inline-block"
          >
            Start Presentation
          </a>
          
          <div className="mt-8 text-gray-light body-text">
            <p>A comprehensive guide to AHP Mod 2.0</p>
          </div>
        </div>
      </div>
    </main>
  );
}
