"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export interface ProjectData {
  title: string;
  description: string; // Short description for card
  content?: string; // Full markdown content for detail page
  tags: string[];
  date: string;
  link?: string;
  images?: string[];
  icon?: React.ReactNode;
  slug?: string; // URL slug for the project
  section?: string; // Which section this project belongs to
}

interface ProjectCardProps {
  project: ProjectData;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleCardClick = () => {
    if (project.slug) {
      router.push(`/projects/${project.slug}`);
    } else if (project.link) {
      if (project.link.startsWith("/")) {
        router.push(project.link);
      } else {
        window.open(project.link, "_blank");
      }
    }
  };

  const handlePrevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) =>
      prev === 0 ? (project.images?.length || 1) - 1 : prev - 1
    );
  };

  const handleNextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % (project.images?.length || 1));
  };

  return (
    <Card className="h-full flex flex-col">
      <div
        className={(project.slug || project.link) ? "cursor-pointer h-full flex flex-col" : "h-full flex flex-col"}
        onClick={handleCardClick}
      >
        <CardHeader className="flex-shrink-0">
          <div className="flex items-center gap-2">
            {project.icon || <Code className="h-6 w-6" />}
            <div className="flex-grow">
              <CardTitle className="flex items-center gap-2 text-lg">
                <span className="line-clamp-2">{project.title}</span>
                {(project.slug || project.link) && (
                  <ExternalLink className="h-4 w-4 inline-block flex-shrink-0" />
                )}
              </CardTitle>
              <CardDescription>{project.date}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col">
          {/* Image carousel */}
          {project.images && project.images.length > 0 && (
            <div className="relative mb-3 aspect-video bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden">
              {project.images.map((img, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    idx === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${project.title} preview ${idx + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}

              {project.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-all z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={handleNextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-all z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </>
              )}
            </div>
          )}

          <p className="text-sm text-muted-foreground mb-3 line-clamp-3">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <Badge key={i} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
