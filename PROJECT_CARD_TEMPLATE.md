# Project Card Template

This template documents the structure for adding new research/project cards with PDF artifacts to the portfolio.

## File Structure

```
/app/projects/[project-slug]/page.tsx    # Project detail page
/public/[project-slug]-*.pdf              # Main PDF document
/public/[slug]-preview-01.png             # PDF preview images
/public/[slug]-preview-02.png
...
```

## Step 1: Convert PDF to Preview Images

```bash
cd /home/ec2-user/matthewcahill11-eng.github.io/public

# Convert specific pages to preview images (800px width)
pdftoppm -png -f 2 -l 2 -scale-to 800 your-document.pdf p2 && mv p2-02.png slug-preview-01.png
pdftoppm -png -f 8 -l 8 -scale-to 800 your-document.pdf p8 && mv p8-08.png slug-preview-02.png
pdftoppm -png -f 12 -l 12 -scale-to 800 your-document.pdf p12 && mv p12-12.png slug-preview-03.png
# ... add more pages as needed
```

## Step 2: Add to Projects List (`components/projects.tsx`)

### Add state for carousel (top of component)
```typescript
const [yourProjectSlide, setYourProjectSlide] = useState(0);

const yourProjectImages = [
  "/slug-preview-01.png", // page 2
  "/slug-preview-02.png", // page 8
  "/slug-preview-03.png", // page 12
  "/slug-preview-04.png", // page 14
];
```

### Add project object
```typescript
{
  title: "Your Project Title",
  description:
    "Brief description highlighting key achievements, methods, and recognition. Keep under 200 words.",
  icon: <Code className="h-6 w-6" />,
  tags: ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5"],
  date: "Context (e.g., MEng, University of X)",
  link: "/projects/your-project-slug",
  images: yourProjectImages,
},
```

**Note:** The carousel in the card component uses a shared state variable. For multiple projects with carousels, you'll need to refactor to use project-specific state or a state object keyed by project index.

## Step 3: Create Project Detail Page

Create: `/app/projects/your-project-slug/page.tsx`

```typescript
"use client";

import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function YourProject() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const previewImages = [
    "/slug-preview-01.png",
    "/slug-preview-02.png",
    "/slug-preview-03.png",
    "/slug-preview-04.png",
    "/slug-preview-05.png",
    "/slug-preview-06.png",
    "/slug-preview-07.png",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % previewImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + previewImages.length) % previewImages.length
    );
  };

  return (
    <main className="min-h-screen py-16">
      <article className="container mx-auto px-4 max-w-4xl">
        {/* Back button */}
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </Link>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Your Project Title
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            Context line (degree, institution, grade)
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            One-sentence summary of the work and its contribution.
          </p>

          {/* PDF Preview Carousel & Button */}
          <div className="flex flex-col gap-8 items-center mt-8">
            {/* Carousel - Card Deck Style */}
            <div className="relative w-full md:w-2/3 h-[350px]">
              <div className="relative w-full h-full max-w-[300px] mx-auto">
                {previewImages.map((img, idx) => {
                  const isCurrent = idx === currentSlide;
                  const nextIndex = (currentSlide + 1) % previewImages.length;
                  const thirdIndex = (currentSlide + 2) % previewImages.length;
                  const isNext = idx === nextIndex;
                  const isThird = idx === thirdIndex;

                  return (
                    <div
                      key={idx}
                      className={`absolute transition-all duration-500 ${
                        isCurrent
                          ? "z-30 left-0 top-0 w-full opacity-100"
                          : isNext
                          ? "z-20 left-[50%] top-0 w-full opacity-70 blur-[1px]"
                          : isThird
                          ? "z-10 left-[75%] top-0 w-full opacity-50 blur-[2px]"
                          : "opacity-0 pointer-events-none"
                      }`}
                      style={{
                        filter: isCurrent ? 'none' : isNext ? 'blur(1px)' : isThird ? 'blur(2px)' : 'none'
                      }}
                    >
                      <div className="relative aspect-[3/4] bg-white dark:bg-zinc-800 rounded-lg overflow-hidden shadow-2xl border-2 border-zinc-200 dark:border-zinc-700">
                        <Image
                          src={img}
                          alt={`PDF Preview Page ${idx + 1}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  );
                })}

                {/* Navigation arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-40"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-40"
                  aria-label="Next page"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Dot indicators */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-40">
                  {previewImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentSlide
                          ? "w-8 bg-zinc-800 dark:bg-white"
                          : "w-2 bg-zinc-400 hover:bg-zinc-600 dark:bg-zinc-500 dark:hover:bg-zinc-300"
                      }`}
                      aria-label={`Go to page ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Page counter */}
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-40">
                  {currentSlide + 1} / {previewImages.length}
                </div>
              </div>
            </div>

            {/* PDF Button */}
            <div className="flex flex-col items-center text-center mt-12">
              <a
                href="/your-document.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg">
                  📄 View Full PDF
                </Button>
              </a>
              <p className="text-sm text-muted-foreground mt-3">
                Preview showing select pages. Click to view the complete document.
              </p>
            </div>

            {/* Recognition (optional) */}
            <div className="mt-12 p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-700">
              <h3 className="text-xl font-bold mb-3">Recognition</h3>
              <p className="text-base leading-relaxed">
                Your recognition details here - grades, citations, adoptions, awards, etc.
              </p>
            </div>
          </div>
        </header>

        {/* Content Sections */}
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Section Title 1</h2>
            <p className="text-lg leading-relaxed mb-4">
              Content paragraph...
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Section Title 2</h2>
            <ul className="space-y-3 text-lg">
              <li>
                <strong>Item title</strong> — description
              </li>
              <li>
                <strong>Item title</strong> — description
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Section Title 3</h2>
            <p className="text-lg leading-relaxed mb-4">
              Content paragraph...
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
```

## Step 4: Upload PDF

Use the upload server or scp to place the PDF in `/public/`:

```bash
# Via scp from local machine
scp your-document.pdf ec2-user@108.131.6.18:/home/ec2-user/matthewcahill11-eng.github.io/public/

# Or use the upload server (create upload-server.js with port 3001)
```

## Key Design Decisions

### Card Deck Carousel
- **3 cards visible**: Current (sharp), next (+50% offset, 1px blur), third (+75% offset, 2px blur)
- **Height**: 350px container, max-width 300px for cards
- **Aspect ratio**: 3:4 (portrait orientation for document pages)
- **Navigation**: Arrows + dot indicators + page counter

### Preview Page Selection
Choose pages that showcase:
1. Title/overview page
2. Key methodology diagrams
3. Results/findings visualizations
4. Technical depth indicators
Typically 4-7 pages total

### Content Structure
1. **Header**: Title, context, one-line summary
2. **Carousel + PDF button**: Visual preview with download
3. **Recognition** (if applicable): Grades, citations, adoptions
4. **Content sections**: How you approached, scope, key findings, proposed work

## Example Reference

See the wind turbine project for a complete working example:
- Card: `/components/projects.tsx` (lines 17-31, 82-143)
- Detail page: `/app/projects/wind-turbine-aeroelastic/page.tsx`
- Images: `/public/preview-01.png` through `/public/preview-07.png`
