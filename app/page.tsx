import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
      <h1 className="text-4xl font-bold mb-8">AHP Mod Presentation</h1>
      <p className="text-xl mb-12">Welcome to the AHP Mod presentation website</p>
      <Link 
        href="/slides/1" 
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Start Presentation
      </Link>
    </main>
  );
}
