# AHP Mod Presentation Website

A simple landing page-style presentation website built with Next.js and Tailwind CSS. Each page corresponds to a single image slide and includes animated transitions and manual navigation controls.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding Slide Images

Place your presentation slide images in the `/public/slides/` directory using the following naming convention:
- slide-1.png
- slide-2.png
- slide-3.png
- etc.

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Deploy

## Project Structure

```
/app
  /slides
    page.tsx (Home slide)
    [slide]/page.tsx (Dynamic slide renderer)
  layout.tsx
  globals.css
/public
  /slides
    slide-1.png
    slide-2.png
    ...
/lib
  slides.ts
```

## Features

- Dynamic routing for slides
- Image-based slides with navigation controls
- Animated transitions
- Presenter notes capability
