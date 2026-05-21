import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projectsDatabase } from "@/data/projects";
import ProjectCard from "@/components/ui/project-card";

export default function ForgePage() {
  const projects = projectsDatabase.filter((p) => p.section === "Forge Robotics");

  return (
    <main className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <Link
          href="/#projects"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>

        <h1 className="text-3xl font-bold tracking-tight mb-4">Forge Robotics</h1>
        <p className="text-muted-foreground mb-12">
          Co-founder work on robotics and ML infrastructure
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
