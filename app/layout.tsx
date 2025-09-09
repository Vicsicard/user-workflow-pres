import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AHP Mod Presentation',
  description: 'A presentation website for AHP Mod',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        {children}
      </body>
    </html>
  );
}
