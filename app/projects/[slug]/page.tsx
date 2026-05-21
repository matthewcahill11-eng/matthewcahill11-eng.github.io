"use client";

import { notFound } from "next/navigation";
import { projectsDatabase } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projectsDatabase.find((p) => p.slug === params.slug);
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!project) {
    notFound();
  }

  const handlePrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? (project.images?.length || 1) - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (project.images?.length || 1));
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <div className="mb-6">
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground">{project.date}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag, i) => (
            <Badge key={i} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Image Carousel - Card Deck Style */}
        {project.images && project.images.length > 0 && (
          <div className="relative w-full md:w-3/4 h-[450px] mx-auto mb-16">
            <div className="relative w-full h-full max-w-[400px] mx-auto">
              {project.images.map((img, idx) => {
                const isCurrent = idx === currentSlide;
                const nextIndex = (currentSlide + 1) % project.images!.length;
                const thirdIndex = (currentSlide + 2) % project.images!.length;
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
                    <div className="relative aspect-[4/3] bg-white dark:bg-zinc-800 rounded-lg overflow-hidden shadow-2xl border-2 border-zinc-200 dark:border-zinc-700">
                      <Image
                        src={img}
                        alt={`${project.title} preview ${idx + 1}`}
                        fill
                        className="object-cover"
                        priority={idx === 0}
                      />
                    </div>
                  </div>
                );
              })}

              {project.images.length > 1 && (
                <>
                  {/* Navigation arrows */}
                  <button
                    onClick={handlePrevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-40"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={handleNextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-40"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>

                  {/* Dot indicators */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-40">
                    {project.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-2 rounded-full transition-all ${
                          idx === currentSlide
                            ? "w-8 bg-zinc-800 dark:bg-white"
                            : "w-2 bg-zinc-400 hover:bg-zinc-600 dark:bg-zinc-500 dark:hover:bg-zinc-300"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Page counter */}
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-40">
                    {currentSlide + 1} / {project.images.length}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {project.content ? (
            <div
              dangerouslySetInnerHTML={{
                __html: project.content.replace(/\n/g, "<br />"),
              }}
            />
          ) : (
            <p>{project.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
