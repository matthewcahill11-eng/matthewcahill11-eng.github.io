"use client";

import { useEffect, useRef, useState } from "react";
import { ProjectData } from "@/components/ui/project-card";

interface AwardsCarouselProps {
  title: string;
  projects: ProjectData[];
}

export default function AwardsCarousel({ title, projects }: AwardsCarouselProps) {
  const scrollContainerRef1 = useRef<HTMLDivElement>(null);
  const scrollContainerRef2 = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const lastTimestamp = useRef<number | null>(null);

  const scrollSpeed = 0.03; // pixels per millisecond

  // Split projects into two rows
  const halfIndex = Math.ceil(projects.length / 2);
  const row1Projects = projects.slice(0, halfIndex);
  const row2Projects = projects.slice(halfIndex);

  useEffect(() => {
    if (isPaused || projects.length === 0) return;

    const animate = (timestamp: number) => {
      if (!lastTimestamp.current) lastTimestamp.current = timestamp;
      const deltaTime = timestamp - lastTimestamp.current;
      lastTimestamp.current = timestamp;

      if (scrollContainerRef1.current) {
        const container = scrollContainerRef1.current;
        container.scrollLeft += scrollSpeed * deltaTime;
        // Loop back when scrolled halfway
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }

      if (scrollContainerRef2.current) {
        const container = scrollContainerRef2.current;
        // Scroll in opposite direction
        container.scrollLeft -= scrollSpeed * deltaTime;
        // Loop back when scrolled to start
        if (container.scrollLeft <= 0) {
          container.scrollLeft = container.scrollWidth / 2;
        }
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused, projects.length]);

  if (projects.length === 0) return null;

  return (
    <div className="mb-16">
      <h3 className="text-xl font-bold tracking-tight mb-6">{title}</h3>

      <div className="space-y-4">
        {/* Row 1 - Scrolling left to right */}
        <div
          ref={scrollContainerRef1}
          className="flex gap-4 overflow-x-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            lastTimestamp.current = null;
          }}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Duplicate items for seamless loop */}
          {[...row1Projects, ...row1Projects].map((project, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 w-64 p-4 rounded-lg border border-border bg-card hover:bg-muted transition-colors"
            >
              <h4 className="font-semibold text-sm line-clamp-2 mb-2">
                {project.title}
              </h4>
              <p className="text-xs text-muted-foreground">{project.date}</p>
            </div>
          ))}
        </div>

        {/* Row 2 - Scrolling right to left */}
        <div
          ref={scrollContainerRef2}
          className="flex gap-4 overflow-x-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            lastTimestamp.current = null;
          }}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Duplicate items for seamless loop */}
          {[...row2Projects, ...row2Projects].map((project, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 w-64 p-4 rounded-lg border border-border bg-card hover:bg-muted transition-colors"
            >
              <h4 className="font-semibold text-sm line-clamp-2 mb-2">
                {project.title}
              </h4>
              <p className="text-xs text-muted-foreground">{project.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
