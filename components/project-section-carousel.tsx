"use client";

import { useState, useEffect, useRef } from "react";
import ProjectCard from "@/components/ui/project-card";
import { ProjectData } from "@/components/ui/project-card";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectSectionCarouselProps {
  title: string;
  projects: ProjectData[];
}

export default function ProjectSectionCarousel({
  title,
  projects,
}: ProjectSectionCarouselProps) {
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const lastTimestamp = useRef<number>(0);

  // Duplicate projects for seamless looping
  const duplicatedProjects = [...projects, ...projects];

  // Card width + gap (approximate)
  const cardWidth = 400; // Adjust based on your card size
  const gap = 24; // gap-6 = 24px
  const scrollSpeed = 0.02; // pixels per millisecond (slow)

  useEffect(() => {
    if (isPaused || projects.length <= 3) return;

    const animate = (timestamp: number) => {
      if (!lastTimestamp.current) lastTimestamp.current = timestamp;

      const delta = timestamp - lastTimestamp.current;
      lastTimestamp.current = timestamp;

      setOffset((prev) => {
        const newOffset = prev + (scrollSpeed * delta);
        const maxOffset = (cardWidth + gap) * projects.length;

        // Reset to 0 when we've scrolled through all original cards
        if (newOffset >= maxOffset) {
          return 0;
        }

        return newOffset;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, projects.length, cardWidth, gap, scrollSpeed]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    lastTimestamp.current = 0;
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    lastTimestamp.current = 0;
  };

  const handlePrev = () => {
    setOffset((prev) => {
      const newOffset = prev - (cardWidth + gap);
      if (newOffset < 0) {
        return (cardWidth + gap) * (projects.length - 1);
      }
      return newOffset;
    });
  };

  const handleNext = () => {
    setOffset((prev) => {
      const newOffset = prev + (cardWidth + gap);
      const maxOffset = (cardWidth + gap) * projects.length;
      if (newOffset >= maxOffset) {
        return 0;
      }
      return newOffset;
    });
  };

  // Don't render section if no projects
  if (projects.length === 0) {
    return null;
  }

  return (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold tracking-tight">{title}</h3>
        {projects.length > 3 && (
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
              aria-label="Previous projects"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
              aria-label="Next projects"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>

      <div
        className="relative overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={containerRef}
      >
        {/* Left gradient fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />

        {/* Right gradient fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-6 transition-transform"
          style={{
            transform: `translateX(-${offset}px)`,
            transition: isPaused ? 'transform 0.3s ease-out' : 'none',
          }}
        >
          {duplicatedProjects.map((project, i) => (
            <div
              key={i}
              className="flex-shrink-0"
              style={{ width: `${cardWidth}px` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
